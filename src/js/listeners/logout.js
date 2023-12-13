import { logoutUser } from "../auth/logout.js";
import { logout_btn } from "../utils/domElements.js";

logout_btn.addEventListener("click", (e) => {
  e.preventDefault();
  logoutUser();
  console.log("clicked");
  location.href = "/";
});
