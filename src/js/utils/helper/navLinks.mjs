import { loadToken } from "../../storage/storage.mjs";

export function createNavLink(text, href, id) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.classList.add(
    "text-black",
    "hover:font-bold",
    "hover:text-brand-color",
    "transition-all",
    "mx-2"
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
    window.location = `/src/html/profile.html?name=${profile.name}`;
  });
  return link;
}

export function profileEvent(href) {
  const link = document.createElement("a");
  link.href = href;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const profile = loadToken("profile");
    window.location = `/src/html/profile.html?name=${profile.name}`;
  });
  return link;
}
