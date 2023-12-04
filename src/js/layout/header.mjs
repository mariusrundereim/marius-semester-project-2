import { loadToken } from "../storage/storage.mjs";
import { logoutUser } from "../auth/logout.mjs";
import { checkLoggedIn } from "../auth/state.mjs";
import { createButton } from "../utils/helper/createButton.mjs";
import { createNavLink, profileLinkEvent } from "../utils/helper/navLinks.mjs";

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
  const profileLink = profileLinkEvent("Profile", "#");

  const newList = createNavLink("Add", "/src/html/newListing.html");

  ul.appendChild(homeLink);
  ul.appendChild(profileLink);
  ul.appendChild(listingsLink);
  ul.appendChild(newList);
  navigation.appendChild(ul);
  return navigation;
}

function createButtons() {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add(
    "flex",
    "flex-row",
    "items-center",
    "gap-2",
    "border",
    "border-2",
    "border-red-500"
  );
  const profile = loadToken("profile");
  if (profile) {
    // Element
    const profileElement = document.createElement("div");
    profileElement.classList.add(
      "flex",
      "flex-row",
      "items-center",
      "gap-2",
      "border-2",
      "border-zomp-500",
      "p-2",
      "rounded-full"
    );
    const creditElement = document.createElement("div");
    creditElement.classList.add(
      "text-sm",
      "bg-brand-dark",
      "text-white",
      "p-2",
      "px-4",
      "rounded-full"
    );
    creditElement.textContent = `${profile.credits} Credits`;
    // Avatar
    const avatarDiv = document.createElement("div");
    const avatarImg = document.createElement("img");
    avatarImg.setAttribute("src", `${profile.avatar}`);
    avatarImg.setAttribute("alt", "Profile avatar");
    avatarImg.classList.add(
      "h-12",
      "aspect-square",
      "object-cover",
      "rounded-full"
    );
    avatarDiv.appendChild(avatarImg);
    profileElement.appendChild(avatarDiv);
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
