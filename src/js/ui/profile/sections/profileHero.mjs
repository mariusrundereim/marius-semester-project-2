export function profileHero(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const heroSection = document.createElement("section");
  const heroSecInner = document.createElement("div");
  const heroSecInnerLeft = document.createElement("div");
  const heroSecInnerRight = document.createElement("div");
  const profileAvatar = document.createElement("img");
  const profileName = document.createElement("h2");
  const profileEditBtn = document.createElement("button");
  heroSection.classList.add(
    "flex",
    "flex-col",
    "sm:flex-row",
    "h-30",
    "justify-between",
    "items-center"
  );
  heroSecInner.classList.add("flex", "gap-4");
  heroSecInnerLeft.classList.add("flex", "justify-center", "items-center");
  heroSecInnerRight.classList.add("flex", "justify-center", "items-center");
  profileAvatar.classList.add("h-20", "w-20", "rounded-full", "object-cover");
  profileName.classList.add("text-2xl", "font-bold");
  profileEditBtn.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark"
  );
  profileAvatar.src = profile.avatar;
  profileName.textContent = profile.name;
  profileEditBtn.textContent = "Change avatarrrr";
  heroSection.appendChild(heroSecInner);
  heroSecInner.appendChild(heroSecInnerLeft);
  heroSecInner.appendChild(heroSecInnerRight);
  heroSecInnerLeft.appendChild(profileAvatar);
  heroSecInnerLeft.appendChild(profileName);
  heroSecInnerRight.appendChild(profileEditBtn);
  profileContainer.appendChild(heroSection);
  return heroSection;
}
