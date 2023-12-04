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
