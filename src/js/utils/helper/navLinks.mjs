import { loadToken } from "../../storage/storage.mjs";
import { logoutUser } from "../../auth/logout.mjs";
import { createButton } from "./createButton.mjs";

export function createNavLink(text, href, id) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.classList.add(
    "text-black",
    "hover:font-bold",
    "hover:text-brand-color",
    "transition-all",
    "text-lg"
  );
  link.href = href;
  link.textContent = text;
  if (id) {
    link.id = id;
  }
  listItem.appendChild(link);
  return listItem;
}

// Helper function to create navigation links with event listener
export function profileLinkEvent(text, href) {
  const link = document.createElement("a");
  link.textContent = text;
  link.href = href;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const profile = loadToken("profile");
    window.location = `./profile.html?name=${profile.name}`;
  });
  return link;
}

// Link to profile page
export function profileLink(href) {
  const link = document.createElement("a");
  link.href = href;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const profile = loadToken("profile");
    window.location = `/src/html/profile.html?name=${profile.name}`;
  });
  return link;
}

// Logout button
export function logoutButtonEvent() {
  const logoutBtn = createButton("#", "Logout", "logout_btn", "button");
  logoutBtn.classList.add(
    "text-white",
    "bg-brand-dark",
    "hover:bg-brand-red",
    "p-2",
    "px-4"
  );
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    logoutUser();
    window.location.href = "./";
  });
  return logoutBtn;
}
