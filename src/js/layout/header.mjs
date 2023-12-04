import { loadToken } from "../storage/storage.mjs";
import { logoutUser } from "../auth/logout.mjs";
import { checkLoggedIn } from "../auth/state.mjs";
import { createButton } from "../utils/helper/createButton.mjs";
import { createNavLink } from "../utils/helper/navLinks.mjs";

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

  const logoLink = document.createElement("a");
  const logo = document.createElement("img");
  logo.classList.add("w-36");
  logo.setAttribute("src", "../assets/logo/logo_bidify.svg");
  logo.setAttribute("alt", "Brand logo");
  logoLink.setAttribute("href", "/index.html");
  logoLink.appendChild(logo);

  const navigation = document.createElement("nav");
  navigation.classList.add("flex", "flex-col", "sm:flex-row", "gap-2");

  const ul = document.createElement("ul");
  ul.classList.add("flex", "flex-col", "sm:flex-row", "gap-2");

  // Links
  const homeLink = createNavLink("Home", "/index.html");

  const listingsLink = createNavLink("Listings", "/src/html/listings.html");

  const profileLink = createNavLink("Profile", "#");
  profileLink.classList.add("nav-link-profile");
  profileLink.addEventListener("click", (e) => {
    e.preventDefault();
    const profile = loadToken("profile");
    window.location = `/src/html/profile.html?name=${profile.name}`;
  });

  const newList = createNavLink("Add", "#");
  newList.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = `/src/html/newListing.html`;
  });

  ul.appendChild(homeLink);
  ul.appendChild(profileLink);
  ul.appendChild(listingsLink);
  ul.appendChild(newList);

  // Appends
  containerDiv.appendChild(logoLink);
  navigation.appendChild(ul);
  containerDiv.appendChild(navigation);

  // Buttons

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add(
    "flex",
    "gap-2",
    "border-l",
    "border-gray-300",
    "pl-4"
  );
  const loginBtn = createButton("/src/html/login.html", "Login", "login_btn");
  const registerBtn = createButton(
    "/src/html/register.html",
    "Register",
    "register_btn"
  );
  const logoutBtn = createButton("#", "Logout", "logout_btn", "button");
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    logoutUser();
    location.href = "/";
  });

  // Profile

  const profile = loadToken("profile");
  if (profile) {
    const divElement = document.createElement("div");
    divElement.classList.add("w-max", "rounded-2xl");
    const divInner = document.createElement("div");
    divInner.classList.add("flex", "gap-2", "align-middle", "p-2");
    const profileImage = document.createElement("img");
    profileImage.setAttribute("src", profile.avatar);
    console.log("Avatar", profile.avatar);
    profileImage.setAttribute("alt", "Profile image");
    profileImage.classList.add(
      "w-10",
      "aspect-square",
      "rounded-full",
      "object-cover"
    );
    const newDiv = document.createElement("div");
    const profileName = document.createElement("h3");
    profileName.textContent = profile.name;
    profileName.classList.add("text-black", "font-bold");
    const profileCredits = document.createElement("p");
    profileCredits.textContent = `Credits: ${profile.credits}`;
    profileCredits.classList.add("text-black");
    newDiv.appendChild(profileName);
    newDiv.appendChild(profileCredits);
    divInner.appendChild(profileImage);
    divInner.appendChild(newDiv);
    divElement.appendChild(divInner);
    buttonsDiv.appendChild(divElement);
  }

  buttonsDiv.appendChild(loginBtn);
  buttonsDiv.appendChild(registerBtn);
  buttonsDiv.appendChild(logoutBtn);
  containerDiv.appendChild(buttonsDiv);
  htmlHeader.appendChild(containerDiv);

  // Hide login and register buttons if logged in
  if (isLoggedIn) {
    loginBtn.classList.add("hidden");
    registerBtn.classList.add("hidden");
  } else {
    logoutBtn.classList.add("hidden");
  }

  // Hide profile when logged out
  if (!isLoggedIn) {
    profileLink.classList.add("hidden");
  }

  return htmlHeader;
}
