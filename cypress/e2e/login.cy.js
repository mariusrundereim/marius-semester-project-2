const email = "mariusru@stud.noroff.no";
const password = "MMariusssS333%";

const wrongEmail = "mariusru@gmail.com";
const wrongPass = "Test1234";

describe("Wrong auth login", () => {
  it("Try your best", () => {
    cy.visit("index.html");
    cy.clearLocalStorage();
    cy.get("button").contains("Login").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(wrongEmail);
    cy.get("input[name=password]").type(wrongPass);
    cy.wait(600);
    cy.get('[data-cy="login-submit"]').click();
  });
});
