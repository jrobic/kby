describe("smoke", () => {
  it("should display '/' ", () => {
    cy.visit("/");

    cy.findByRole("button", { name: "Boop" });

    cy.findByText(/hello world!/i).should("exist");
  });
});
