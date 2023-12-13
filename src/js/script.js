import { header } from "./layout/header.js";
import { updateCredits } from "./utils/helper/updateCredit.js";

// Header
const headerElement = header();
document.body.prepend(headerElement);

updateCredits();
