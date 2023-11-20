import { loadToken } from "../storage/storage.mjs";

export const isLoggedIn = () => Boolean(loadToken("token"));
export const profile = () => loadToken("profile");
