import { loadToken } from "../storage/storage.mjs";

export function checkLoggedIn() {
  const profile = loadToken("profile");

  const isLoggedIn = profile !== null && profile !== undefined;

  return isLoggedIn;
}
