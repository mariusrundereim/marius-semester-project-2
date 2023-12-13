import { loadToken } from "../storage/storage.js";

export function checkLoggedIn() {
  const profile = loadToken("profile");

  const isLoggedIn = profile !== null && profile !== undefined;

  return isLoggedIn;
}
