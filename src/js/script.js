import { header } from "./layout/header.mjs";
import { updateCredits } from "./utils/helper/updateCredit.mjs";

// Header
const headerElement = header();
document.body.prepend(headerElement);

updateCredits();
