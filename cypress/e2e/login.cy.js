const email = "mariusru@stud.noroff.no";
const password = "MMariusssS333%";

describe("Wrong auth login", () => {
  it("Try your best", () => {
    cy.visit("index.html");
    cy.clearLocalStorage();
    cy.get("button").contains("Login").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.wait(600);
    cy.get('[data-cy="login-submit"]').click();
  });
});
