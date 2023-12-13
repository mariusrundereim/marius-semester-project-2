export const nameError = document.querySelector("#nameError");
export const emailError = document.querySelector("#emailError");
export const passwordError = document.querySelector("#passwordError");

export function clearErrors() {
  if (nameError) nameError.textContent = "";
  if (emailError) emailError.textContent = "";
  if (passwordError) passwordError.textContent = "";
}
