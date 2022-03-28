FROM node:lts-alpine as base

LABEL maintainer="Jonathan Robic<hello@jonathanrobic.fr>"

ENV PROJECT_DIR=/app
# good colors for most applications
ENV TERM xterm
# avoid million NPM install messages
ENV npm_config_loglevel warn
# allow installing when the main user is root
ENV npm_config_unsafe_perm true

ENV HUSKY_SKIP_HOOKS 1

# Define the npm cache folder
ENV PNPM_STORE=/root/.cache/.pnpm-store

WORKDIR ${PROJECT_DIR}

# Install pnpm
RUN npm i -g pnpm
RUN pnpm config set store-dir ${PNPM_STORE}

RUN pnpm i -g clean-modules

# ---------------------------
FROM base as builder-api

RUN echo "Work dir: $(pwd)"

COPY pnpm-lock.yaml ./
# RUN pnpm fetch

COPY .npmrc pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY ./packages/scripts/package.json ./packages/scripts/package.json
COPY ./packages/graphql/package.json ./packages/graphql/package.json
COPY ./apps/api/package.json ./apps/api/package.json

# Install npm dependencies
# ERROR  ENOENT: no such file or directory, chmod '/app/packages/scripts/node_modules/.bin/jest'
RUN pnpm i || true

# Resolve PNPM troubleshooting (cyclic workspace dependencies)
RUN pnpm i

COPY ./packages/scripts ./packages/scripts
COPY ./packages/graphql ./packages/graphql
COPY ./apps/api ./apps/api

# Codegen
RUN pnpm run codegen --filter="*/api"

# Build packages
RUN pnpm run build --filter="*/api..."

# ---------------------------
FROM base as api

COPY --from=builder-api ${PROJECT_DIR} ${PROJECT_DIR}

ENV NODE_ENV=production

WORKDIR ${PROJECT_DIR}/apps/api

CMD ["npm", "run", "start"]
