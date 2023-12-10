export function profileHero(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const heroSection = document.createElement("section");
  const heroSecInner = document.createElement("div");
  const heroSecInnerLeft = document.createElement("div");
  const heroSecInnerRight = document.createElement("div");
  const profileAvatar = document.createElement("img");
  const profileName = document.createElement("h2");
  const profileEditBtn = document.createElement("button");
  heroSection.classList.add("flex", "h-30", "p-4", "rounded-xl", "bg-white");
  heroSecInner.classList.add(
    "flex",
    "flex-col",
    "w-full",
    "sm:flex-row",
    "justify-between",
    "gap-4",
    "cursor-pointer"
  );
  heroSecInnerLeft.classList.add(
    "flex",
    "flex-col",
    "sm:flex-row",
    "justify-center",
    "items-center",
    "gap-4"
  );
  heroSecInnerRight.classList.add("flex", "justify-center", "items-center");
  profileAvatar.classList.add(
    "h-24",
    "w-24",
    "sm:w-12",
    "sm:h-12",
    "aspect-square",
    "rounded-full",
    "object-cover"
  );
  profileName.classList.add("text-2xl", "font-bold");
  profileEditBtn.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark"
  );
  profileAvatar.src = profile.avatar;
  profileName.textContent = profile.name;
  profileEditBtn.textContent = "Change avatar";
  heroSection.appendChild(heroSecInner);
  heroSecInner.appendChild(heroSecInnerLeft);
  heroSecInner.appendChild(heroSecInnerRight);
  heroSecInnerLeft.appendChild(profileAvatar);
  heroSecInnerLeft.appendChild(profileName);
  heroSecInnerRight.appendChild(profileEditBtn);
  profileContainer.appendChild(heroSection);
  return heroSection;
}
