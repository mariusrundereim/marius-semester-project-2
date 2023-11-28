//import { header } from "./layout/header.js";
import { getProfile } from "./api/profile/profile.mjs";
import { header, createNavLink } from "./layout/header.mjs";

// Header
const headerElement = header();
createNavLink();
document.body.prepend(headerElement);

const profile = getProfile();
console.log("profile from script", profile);
