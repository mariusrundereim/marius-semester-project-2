const email = "mariusru@stud.noroff.no";
const password = "MMariusssS333%";
const newAvatarUrl =
  "https://www.shutterstock.com/image-vector/chopovichy-ukraine-may-24-2023-260nw-2307737625.jpg";

describe("Update new avatar image on profile", () => {
  it("Update avatar", () => {
    // Login
    cy.visit("index.html");
    cy.clearLocalStorage();
    cy.get("button").contains("Login").click();
    cy.wait(400);
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.wait(400);
    cy.get('[data-cy="login-submit"]').click();
    cy.wait(400);

    // Go to profile
    cy.get("button").contains("Edit profile").click();
    cy.wait(400);
    cy.get("input[name=avatar]").type(newAvatarUrl);
    cy.wait(400);
    cy.get("button").contains("Update").click();
    cy.wait(400);
  });
});
