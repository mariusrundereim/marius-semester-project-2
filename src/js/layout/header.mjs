import { loadToken } from "../storage/storage.mjs";
import { checkLoggedIn } from "../auth/state.mjs";

function createNavigation(isLoggedIn) {
  // Navigation
  const navigation = document.createElement("nav");
  navigation.classList.add(
    "flex",
    "flex-col",
    "sm:flex-row",
    "items-center",
    "justify-between",
    "py-4"
  );

  // Brand Logo
  const brandLogoLink = document.createElement("a");
  brandLogoLink.setAttribute("href", "./index.html");
  navigation.appendChild(brandLogoLink);

  const brandLogoImg = document.createElement("img");
  brandLogoImg.classList.add("w-44", "h-12");
  brandLogoImg.setAttribute("src", "./src/assets/logo/logo_bidify.svg");
  brandLogoImg.setAttribute("alt", "Brand logo");
  brandLogoLink.appendChild(brandLogoImg);

  // Primary Navigation
  const primaryNavContainer = document.createElement("div");
  primaryNavContainer.classList.add(
    "absolute",
    "top-32",
    "md:static",
    "sm:top-20",
    "md:top-0",
    "w-full",
    "sm:w-full",
    "sm:bg-blue-500/50",
    "md:w-min",
    "bg-red-400/50",
    "p-2",
    "md:px-2"
  );
  navigation.appendChild(primaryNavContainer);

  const primaryNavList = document.createElement("ul");
  primaryNavList.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "md:space-x-2"
  );
  primaryNavContainer.appendChild(primaryNavList);

  const navItems = ["Listings", "Profile", "Add"];
  navItems.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("text-xl");
    link.setAttribute("href", "#"); // Update href as needed
    link.textContent = item;
    listItem.appendChild(link);
    primaryNavList.appendChild(listItem);
  });

  // Secondary Navigation
  const secondaryNavContainer = document.createElement("div");
  secondaryNavContainer.classList.add("flex", "space-x-2");
  navigation.appendChild(secondaryNavContainer);

  // Unregistered Section
  const unregisteredSection = document.createElement("div");
  unregisteredSection.classList.add(
    "flex",
    "flex-row",
    "space-x-2",
    isLoggedIn ? "hidden" : null
  );
  secondaryNavContainer.appendChild(unregisteredSection);

  const registerButton = createButton(
    "Register",
    "text-white bg-brand-dark hover:bg-brand-color transition-all hover:shadow-lg font-semibold text-lg p-2 px-4 rounded-full"
  );
  unregisteredSection.appendChild(registerButton);

  const loginButton = createButton(
    "Login",
    "text-brand-dark bg-brand-light hover:bg-brand-color transition-all hover:shadow-lg font-semibold text-lg p-2 px-4 rounded-full"
  );
  unregisteredSection.appendChild(loginButton);

  // Registered Section
  const registeredSection = document.createElement("div");
  registeredSection.classList.add(
    "flex",
    "flex-row",
    "space-x-2",
    isLoggedIn ? "hidden" : null
  );
  secondaryNavContainer.appendChild(registeredSection);

  // Add elements to the registered section as needed
  // For example, add an image button, a div with credits, and a logout button

  // Toggle Menu Icon
  const toggleMenuIconContainer = document.createElement("div");
  toggleMenuIconContainer.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "aspect-square",
    "w-12",
    "h-12",
    "rounded-full",
    "bg-white",
    "border",
    "md:hidden"
  );
  secondaryNavContainer.appendChild(toggleMenuIconContainer);

  const toggleMenuIcon = createSvgIcon();
  toggleMenuIconContainer.appendChild(toggleMenuIcon);

  return navigation;
}

// Helper function to create a button element
function createButton(text, className) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add(...className.split(" "));
  return button;
}

// SVG icon element
function createSvgIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke-width", "1.5");
  svg.setAttribute("stroke", "currentColor");
  svg.classList.add("w-6", "h-6");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5");

  svg.appendChild(path);
  return svg;
}

// Endpoint and Main Header Function
export function header() {
  const htmlHeader = document.createElement("header");
  htmlHeader.classList.add("p-2", "bg-white", "h-20");

  const containerDiv = document.createElement("div");
  containerDiv.classList.add(
    "container",
    "mx-auto",
    "flex",
    "items-center",
    "justify-between",
    "space-x-4"
  );

  const navigation = createNavigation();

  containerDiv.appendChild(navigation);
  htmlHeader.appendChild(containerDiv);

  return htmlHeader;
}
