export const loginEmail = document.querySelector("#loginEmailError");
// export const loginPassword = document.querySelector("#loginPasswordError");

export function clearErrors() {
  if (loginEmail) loginEmail.textContent = "";
  // if (loginPassword) loginPassword.textContent = "";
}
