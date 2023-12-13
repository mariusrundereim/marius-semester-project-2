// Helper function to create buttons and links
export function createButton(
  href = "#",
  text = "Button",
  id = "",
  type = "link",
  additionalClasses = []
) {
  const element =
    type === "button"
      ? document.createElement("button")
      : document.createElement("a");

  element.href = href;
  element.textContent = text;
  element.id = id;

  if (type === "button") {
    element.type = "button";
    element.classList.add(
      "text-white",
      "bg-brand-dark",
      "p-2",
      "px-4",
      "rounded-full",
      ...additionalClasses
    );
  } else {
    element.classList.add(
      "bg-brand-light",
      "p-2",
      "px-4",
      "rounded-full",
      "hover:bg-brand-color",
      ...additionalClasses
    );
  }

  return element;
}
