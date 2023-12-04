import { loadToken } from "../storage/storage.mjs";
import { logoutUser } from "../auth/logout.mjs";
import { checkLoggedIn } from "../auth/state.mjs";
import { createButton } from "../utils/helper/createButton.mjs";
import { createNavLink } from "../utils/helper/navLinks.mjs";

function createLogo() {
  const logoLink = document.createElement("a");
  const logo = document.createElement("img");
  logo.classList.add("w-36");
  logo.setAttribute("src", "../assets/logo/logo_bidify.svg");
  logo.setAttribute("alt", "Brand logo");
  logoLink.setAttribute("href", "/index.html");
  logoLink.appendChild(logo);
  return logoLink;
}

function createNavigation() {
  const navigation = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("flex", "flex-col", "sm:flex-row", "gap-2");
  navigation.classList.add("flex", "flex-col", "sm:flex-row", "gap-2");

  // Links
  const homeLink = createNavLink("Home", "/index.html");
  const listingsLink = createNavLink("Listings", "/src/html/listings.html");
  const profileLink = createNavLink("Profile", "#");
  profileLink.classList.add("nav-link-profile");
  const newList = createNavLink("Add", "#");

  ul.appendChild(homeLink);
  ul.appendChild(profileLink);
  ul.appendChild(listingsLink);
  ul.appendChild(newList);
  navigation.appendChild(ul);
  return navigation;
}

function createButtons(isLoggedIn) {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add(
    "flex",
    "gap-2",
    "border-l",
    "border-gray-300",
    "pl-4"
  );

  if (isLoggedIn) {
    const profile = loadToken("profile");
    const profileElement = document.createElement("div");
    profileElement.classList.add("flex", "flex-col", "gap-2");
    const profileNameElement = document.createElement("div");
    profileNameElement.textContent = profile.name;
    const creditElement = document.createElement("div");
    creditElement.textContent = `Credit: ${profile.credits}`;
    profileElement.appendChild(profileNameElement);
    profileElement.appendChild(creditElement);
    buttonsDiv.appendChild(profileElement);
    const logoutBtn = createButton("#", "Logout", "logout_btn", "button");
    buttonsDiv.appendChild(logoutBtn);
  } else {
    const loginBtn = createButton("/src/html/login.html", "Login", "login_btn");
    const registerBtn = createButton(
      "/src/html/register.html",
      "Register",
      "register_btn"
    );
    buttonsDiv.appendChild(loginBtn);
    buttonsDiv.appendChild(registerBtn);
  }

  return buttonsDiv;
}

export function header() {
  const isLoggedIn = checkLoggedIn();
  const htmlHeader = document.createElement("header");
  htmlHeader.classList.add("p-2", "shadow-lg", "bg-white");

  const containerDiv = document.createElement("div");
  containerDiv.classList.add(
    "container",
    "mx-auto",
    "flex",
    "items-center",
    "justify-between",
    "space-x-4"
  );

  const logoLink = createLogo();
  const navigation = createNavigation();
  const buttonsDiv = createButtons(isLoggedIn);

  containerDiv.appendChild(logoLink);
  containerDiv.appendChild(navigation);
  containerDiv.appendChild(buttonsDiv);
  htmlHeader.appendChild(containerDiv);

  return htmlHeader;
}
