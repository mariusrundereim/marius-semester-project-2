import { checkLoggedIn } from "../../../auth/state.js";
import { createButton } from "../../../utils/helper/createButton.js";

export function pageHero() {
  const element = document.querySelector("#home_content");
  const heroSection = document.createElement("section");
  const divInner = document.createElement("div");
  const upperTitle = document.createElement("h1");
  const lowerTitle = document.createElement("h2");
  const buttonDiv = document.createElement("div");

  // Set text content
  upperTitle.textContent = "Bid, Sell, Win";
  lowerTitle.textContent = "Join the Bidify Revolution";

  // Classes
  heroSection.classList.add(
    "bg-graphic-image-one",
    "md:bg-graphic-image-one",
    "rounded-2xl",
    "p-2",
    "min-h-full",
    "flex",
    "flex-col",
    "justify-around",
    "shadow-xl"
  );
  divInner.classList.add(
    "flex",
    "flex-col",
    "space-y-4",
    "items-center",
    "justify-center",
    "min-h-[34rem]"
  );
  upperTitle.classList.add(
    "text-2xl",
    "md:text-4xl",
    "text-brand-light",
    "text-center",
    "bg-brand-dark/40",
    "rounded-full",
    "px-4"
  );
  lowerTitle.classList.add(
    "text-4xl",
    "md:text-6xl",
    "text-brand-light",
    "font-bold",
    "text-center",
    "bg-brand-dark/40",
    "rounded-full",
    "px-4"
  );
  buttonDiv.classList.add("flex", "flex-col", "md:flex-row", "gap-4", "p-4");

  // Create buttons
  const regButton = createButton(
    "./register.html",
    "Register",
    "register_btn",
    "link",
    ["text-xl", "rounded-lg", "bg-brand-light", "md:w-auto", "transition-all"]
  );
  const loginButton = createButton(
    "./login.html",
    "Login",
    "login_btn",
    "link",
    ["text-xl", "bg-brand-light", "rounded-lg", "md:w-auto", "transition-all"]
  );
  const exploreButton = createButton(
    "./listings.html",
    "Explore",
    "explore_btn",
    "link",
    [
      "text-xl",
      "rounded-lg",
      "bg-brand-color",
      "hover:bg-brand-white",
      "md:w-auto",
      "transition-all",
    ]
  );

  const isLoggedIn = checkLoggedIn();
  if (isLoggedIn) {
    regButton.classList.add("hidden");
    loginButton.classList.add("hidden");
  }

  // Append elements
  buttonDiv.appendChild(regButton);
  buttonDiv.appendChild(loginButton);
  buttonDiv.appendChild(exploreButton);
  divInner.appendChild(upperTitle);
  divInner.appendChild(lowerTitle);
  divInner.appendChild(buttonDiv);
  heroSection.appendChild(divInner);
  element.appendChild(heroSection);
  return heroSection;
}
