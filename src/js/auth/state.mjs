import { loadToken } from "../storage/storage.mjs";
// import { loadToken } from "../../storage/storage.mjs";

// export const isLoggedIn = () => Boolean(loadToken("token"));
// export const profile = () => loadToken("profile");

export function checkLoggedIn() {
  const profile = loadToken("profile");
  return profile !== null && profile !== undefined;
}
