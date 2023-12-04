import { header, createNavLink } from "./layout/header.mjs";

// Header
const headerElement = header();
createNavLink();
document.body.prepend(headerElement);
