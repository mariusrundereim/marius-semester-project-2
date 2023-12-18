import { toogleIcon } from "./sections/toggle.js";
//Above is new
import { loadToken } from "../../storage/storage.js";
import { checkLoggedIn } from "../../auth/state.js";
import {
  logoutButtonEvent,
  createNavLink,
  profileLinkEvent,
} from "../../utils/helper/navLinks.js";

import { updateAvatar } from "../../api/profile/updateProfile.js";
import { updateCredit } from "../../api/updateCredit.js";

async function updateCredits() {
  const credits = await updateCredit();
  return `${credits} Credits`;
}

function createNavigation() {
  const isLoggedIn = checkLoggedIn();
  const profile = loadToken("profile");
  // const credits = updateCredit();

  // Navigation
  const navigation = document.createElement("nav");
  navigation.classList.add(
    "relative",
    "flex",
    "flex-col",
    "sm:flex-row",
    "items-center",
    "justify-between",
    "py-4",
    "w-full"
  );

  // Brand Logo
  const brandLogoLink = document.createElement("a");
  brandLogoLink.setAttribute("href", "./index.html");
  navigation.appendChild(brandLogoLink);

  const brandLogoImg = document.createElement("img");
  brandLogoImg.classList.add("w-32", "h-12");
  brandLogoImg.setAttribute("src", getLogoSrc());
  brandLogoImg.setAttribute("alt", "Brand logo");
  brandLogoLink.appendChild(brandLogoImg);

  // Responsive logo
  function getLogoSrc() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 520) {
      return "./src/assets/logo/logo_bidify.svg";
    } else {
      return "./src/assets/logo/logo_bidify_sm.svg";
    }
  }

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
    "md:w-min",
    "bg-brand-light",
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

  const navItems = [];

  if (isLoggedIn) {
    navItems.push(
      { text: "Listings", href: "./listings.html" },
      {
        text: "Profile",
        href: isLoggedIn ? `./profile.html?name=${profile.name}` : "#",
        id: "profile-link",
      },
      { text: "Add", href: "./newListing.html" }
    );
  }

  navItems.forEach((item) => {
    const listItem = createNavLink(item.text, item.href);
    if (item.id) {
      listItem.id = item.id;
    }
    primaryNavList.appendChild(listItem);
  });

  // Click Navigation
  primaryNavList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "A" && target.getAttribute("href")) {
      e.preventDefault();

      window.location.href = target.getAttribute("href");
    }
  });

  // Secondary Navigation
  const secondaryNavContainer = document.createElement("div");
  secondaryNavContainer.classList.add("flex", "space-x-2");
  navigation.appendChild(secondaryNavContainer);

  if (isLoggedIn) {
    // Registered Section

    const registeredSection = document.createElement("div");
    registeredSection.classList.add(
      "flex",
      "flex-row",
      "space-x-2",
      isLoggedIn ? null : "hidden" // Initially hide the registered section
    );

    const logoutBtn = logoutButtonEvent();

    // Div inner
    const regDivInner = document.createElement("div");
    const avatarImg = document.createElement("img");
    const creditDiv = document.createElement("div");

    regDivInner.classList.add("flex", "flex-row", "items-center", "gap-2");
    const avatarLink = profileLinkEvent(
      "",
      `./profile.html?name=${profile.name}`
    );
    //Avatar
    (async () => {
      try {
        const updatedProfileDetails = await updateAvatar();

        const updatedAvatarUrl = updatedProfileDetails.avatar;

        // Update Avatar image only if the update is successful
        avatarImg.setAttribute("src", `${profile.avatar}`);
        avatarImg.setAttribute("alt", "Profile avatar");
        avatarImg.classList.add("h-12", "w-12", "object-cover", "rounded-full");

        // Credits div
        const updatedCredits = await updateCredits();
        creditDiv.textContent = updatedCredits;
      } catch (error) {
        console.error("Error updating avatar:", error.message);
      }
    })();
    // Credits div
    (async () => {
      const updatedCredits = await updateCredits();
      creditDiv.classList.add(
        "flex",
        "items-center",
        "justify-center",
        "bg-brand-dark",
        "text-white",
        "p-2",
        "h-12",
        "px-4",
        "rounded-full",
        "hidden",
        "sm:flex",
        "cursor-default"
      );
      creditDiv.textContent = updatedCredits;
    })();

    const profileLink = document.querySelector("#profile-link");
    if (profileLink) {
      profileLink.classList.add("hidden");
    }

    avatarLink.appendChild(avatarImg);
    regDivInner.appendChild(avatarLink);
    regDivInner.appendChild(creditDiv);
    registeredSection.appendChild(regDivInner);
    registeredSection.appendChild(logoutBtn);

    secondaryNavContainer.appendChild(registeredSection);
  } else {
    // Unregistered Section
    const unregisteredSection = document.createElement("div");
    unregisteredSection.classList.add("flex", "flex-row", "space-x-2");
    secondaryNavContainer.appendChild(unregisteredSection);

    // Buttons
    const registerButtonLink = document.createElement("a");
    registerButtonLink.setAttribute("href", "./register.html");
    const registerButton = createButton(
      "Register",
      "text-white bg-brand-dark hover:bg-brand-color transition-all hover:shadow-lg font-semibold text-lg p-2 px-4 rounded-full"
    );
    registerButtonLink.appendChild(registerButton);
    unregisteredSection.appendChild(registerButtonLink);

    const loginButtonLink = document.createElement("a");
    loginButtonLink.setAttribute("href", "./login.html");

    const loginButton = createButton(
      "Login",
      "text-brand-dark bg-brand-light hover:bg-brand-color transition-all hover:shadow-lg font-semibold text-lg p-2 px-4 rounded-full"
    );
    loginButtonLink.appendChild(loginButton);
    unregisteredSection.appendChild(loginButtonLink);
  }

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
    "cursor-pointer",
    "md:hidden"
  );
  secondaryNavContainer.appendChild(toggleMenuIconContainer);

  // Toggle Menu Icon
  const toggleMenuIcon = toogleIcon();
  toggleMenuIconContainer.appendChild(toggleMenuIcon);

  toggleMenuIconContainer.addEventListener("click", (e) => {
    e.preventDefault();
    primaryNavContainer.classList.toggle("hidden");
  });

  return navigation;
}

// Helper function to create a button element
function createButton(text, className) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add(...className.split(" "));
  return button;
}

// Endpoint and Main Header Function
export function header() {
  const htmlHeader = document.createElement("header");
  htmlHeader.classList.add("p-2", "h-20", "flex");

  const containerDiv = document.createElement("div");
  containerDiv.classList.add(
    "relative",
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
