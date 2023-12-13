import { removeToken } from "../storage/storage.js";
// import { removeToken } from "../../storage/storage.js";

export function logoutUser() {
  removeToken("token");
  removeToken("profile");
}
