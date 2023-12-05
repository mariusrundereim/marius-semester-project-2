import { loadToken } from "../storage/storage.mjs";
// import { loadToken } from "../../storage/storage.mjs";

// export const isLoggedIn = () => Boolean(loadToken("token"));
// export const profile = () => loadToken("profile");

// export function checkLoggedIn() {
//   const profile = loadToken("profile");
//   return profile !== null && profile !== undefined;
// }

export function checkLoggedIn() {
  const profile = loadToken("profile");
  console.log("Profile:", profile);

  const isLoggedIn = profile !== null && profile !== undefined;
  console.log("IsLoggedIn:", isLoggedIn);

  return isLoggedIn;
}
