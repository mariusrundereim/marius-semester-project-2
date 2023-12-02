import { header, createNavLink } from "./layout/header.mjs";
// import { displayProfile } from "./ui/profile/displayProfile.mjs";

// import DisplayMessage from "./utils/messages/toast.mjs";

// Header
const headerElement = header();
createNavLink();
document.body.prepend(headerElement);

// new DisplayMessage({
//   text: "Hello World",
//   type: "success",
//   duration: 3000,
//   position: "top-left",
// });

// export const profile = getProfile();

// document.addEventListener("DOMContentLoaded", async () => {
//   await displayProfile();
// });
