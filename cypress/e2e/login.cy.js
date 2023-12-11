const email = "mariusru@stud.noroff.no";
const password = "MMariusssS333%";

const wrongEmail = "mariusru@gmail.com";
const wrongPass = "Test1234";

describe("Wrong auth login", () => {
  cy.visit("https://mariusrundereim.github.io/marius-semester-project-2/");
  cy.clearLocalStorage();
  cy.get("button").contains("Login").click();
  cy.wait(1000);
});
