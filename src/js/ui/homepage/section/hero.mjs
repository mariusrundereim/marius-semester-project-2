import { createButton } from "../../../utils/helper/createButton.mjs";

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
    "bg-brand-dark",
    "md:bg-graphic-image-1",
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
    "min-h-[20rem]"
  );
  upperTitle.classList.add(
    "text-2xl",
    "md:text-4xl",
    "text-brand-light",
    "text-center"
  );
  lowerTitle.classList.add(
    "text-4xl",
    "md:text-6xl",
    "text-brand-light",
    "font-bold",
    "text-center"
  );
  buttonDiv.classList.add("flex", "flex-col", "md:flex-row", "gap-4", "p-4");

  // Create buttons
  const regButton = createButton(
    "/register",
    "Register",
    "register_btn",
    "link",
    ["w-full", "md:w-auto"]
  );
  const loginButton = createButton("/login", "Login", "login_btn", "link", [
    "w-full",
    "md:w-auto",
  ]);
  const exploreButton = createButton(
    "/explore",
    "Explore",
    "explore_btn",
    "link",
    ["w-full", "md:w-auto"]
  );

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
