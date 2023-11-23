import { loadToken } from "../storage/storage.mjs";
import { logoutUser } from "../auth/logout.mjs";
import { checkLoggedIn } from "../auth/state.mjs";

export function header() {
  const isLoggedIn = checkLoggedIn();
  const htmlHeader = document.createElement("header");
  htmlHeader.classList.add("p-2", "shadow-lg");

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
  logo.classList.add("w-20");
  logo.setAttribute("src", "./assets/logo/logo_bidify.svg");
  logo.setAttribute("alt", "Brand logo");
  logoLink.setAttribute("href", "/index.html");
  logoLink.appendChild(logo);

  const navigation = document.createElement("nav");
  navigation.classList.add("flex", "flex-col", "sm:flex-row", "gap-2");

  const ul = document.createElement("ul");
  ul.classList.add("flex", "flex-col", "sm:flex-row", "gap-2");

  // Links
  const homeLink = createNavLink("Home", "#");

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

  buttonsDiv.appendChild(loginBtn);
  buttonsDiv.appendChild(registerBtn);
  buttonsDiv.appendChild(logoutBtn);

  containerDiv.appendChild(buttonsDiv);
  htmlHeader.appendChild(containerDiv);

  //   if (!isLoggedIn) {
  //     const profile = document.querySelector("nav-link-profile");
  //     profile.classList.add("hidden");
  //   }

  return htmlHeader;
}

export function createNavLink(text, href, id) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  if (id) {
    link.id = id;
  }
  listItem.appendChild(link);
  return listItem;
}

// Helper function to create buttons and links
export function createButton(href, text, id, type) {
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
      "rounded-2xl"
    );
  } else {
    element.classList.add(
      "bg-brand-light",
      "p-2",
      "px-4",
      "rounded-2xl",
      "hover:bg-brand-color"
    );
  }
  return element;
}
