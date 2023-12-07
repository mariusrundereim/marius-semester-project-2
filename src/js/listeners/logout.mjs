import { logoutUser } from "../auth/logout.mjs";
import { logout_btn } from "../utils/domElements.mjs";

logout_btn.addEventListener("click", (e) => {
  e.preventDefault();
  logoutUser();
  console.log("clicked");
  location.href = "/";
});
