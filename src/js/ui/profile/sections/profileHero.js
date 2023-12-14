// Profile Hero
// Edit profile
// Profile Dashboard (Wins and Total Credit)

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
  profileEditBtn.id = "edit_profile_btn";
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
    "px-4",
    "py-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark",
    "hover:bg-brand-color",
    "transition-all"
  );
  profileAvatar.src = profile.avatar;
  profileName.textContent = profile.name;
  profileEditBtn.textContent = "Edit profile";
  heroSection.appendChild(heroSecInner);
  heroSecInner.appendChild(heroSecInnerLeft);
  heroSecInner.appendChild(heroSecInnerRight);
  heroSecInnerLeft.appendChild(profileAvatar);
  heroSecInnerLeft.appendChild(profileName);
  heroSecInnerRight.appendChild(profileEditBtn);
  profileContainer.appendChild(heroSection);
  return heroSection;
}

export function editProfile(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const editSection = document.createElement("section");
  const editSecInner = document.createElement("div");
  const title = document.createElement("h2");
  const form = document.createElement("form");
  const formLabel = document.createElement("label");
  const formInput = document.createElement("input");
  const formBtn = document.createElement("button");
  editSection.id = "edit_profile";
  editSection.classList.add("hidden");

  // Email
  const emailDiv = document.createElement("div");
  const emailTitle = document.createElement("h2");
  const userEmail = document.createElement("p");

  emailDiv.classList.add("flex", "flex-col");
  emailTitle.classList.add("text-xl", "font-medium");
  userEmail.classList.add("text-lg");
  emailTitle.textContent = "Email";
  userEmail.textContent = profile.email;
  emailDiv.appendChild(emailTitle);
  emailDiv.appendChild(userEmail);
  editSecInner.appendChild(emailDiv);

  // Classes
  editSection.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "h-30",
    "p-4",
    "rounded-xl",
    "bg-white"
  );
  editSecInner.classList.add("flex", "flex-col", "gap-4");
  form.classList.add("flex", "flex-col", "gap-2");
  form.id = "updateAvatar_form";
  title.classList.add("text-2xl", "font-bold");
  formLabel.classList.add("text-xl", "font-medium");
  formInput.classList.add(
    "border",
    "border-gray-300",
    "rounded-xl",
    "max-w-min",
    "p-2"
  );
  formInput.id = "new_avatar";

  formBtn.classList.add(
    "flex",
    "justify-center",
    "max-w-min",
    "px-4",
    "py-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark",
    "hover:bg-brand-color",
    "transition-all"
  );
  // Content
  title.textContent = "Edit Profile";
  formLabel.textContent = "Change avatar";
  formInput.type = "text";
  formInput.name = "avatar";
  formInput.placeholder = "Insert URL";
  // formInput.value = profile.avatar;
  formBtn.textContent = "Update";
  // Append
  editSection.appendChild(title);
  editSection.appendChild(editSecInner);
  editSecInner.appendChild(form);
  form.appendChild(formLabel);
  form.appendChild(formInput);
  form.appendChild(formBtn);
  profileContainer.appendChild(editSection);
  return editSection;
}

export function profileDashboard(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const dashboardSection = document.createElement("section");
  // Profile Wins and Total Credit
  const profileWins = document.createElement("div");
  const profileWinsTitle = document.createElement("h2");
  const profileWinsCount = document.createElement("p");
  const profileCredit = document.createElement("div");
  const profileCreditTitle = document.createElement("h2");
  const profileCreditCount = document.createElement("p");
  // Add classes
  dashboardSection.classList.add("flex", "flex-col", "md:flex-row", "gap-4");
  profileWins.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "basis-1/2",
    "min-h-[14rem]",
    "items-center",
    "justify-center",
    "bg-brand-dark",
    "rounded-xl",
    "p-2"
  );
  profileCredit.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "basis-1/2",
    "min-h-[10rem]",
    "items-center",
    "justify-center",
    "text-brand-dark",
    "bg-brand-color",
    "rounded-xl",
    "p-2"
  );
  profileWinsTitle.classList.add("text-2xl", "font-bold", "text-white");
  profileWinsCount.classList.add("text-2xl", "text-white");
  profileCreditTitle.classList.add("text-2xl", "font-bold");
  profileCreditCount.classList.add("text-2xl");
  // Add content
  if (profile.wins.length === 0) {
    profileWinsTitle.textContent = "Win";
    profileWinsCount.textContent = "Bet on Listings to win";
  } else {
    profileWinsTitle.textContent = "Wins";
    profileWinsCount.textContent = profile.wins.length + " " + "Items";
  }
  profileCreditTitle.textContent = "Total";
  profileCreditCount.textContent = profile.credits + " " + "Credits";
  // Append
  dashboardSection.appendChild(profileWins);
  dashboardSection.appendChild(profileCredit);
  profileWins.appendChild(profileWinsTitle);
  profileWins.appendChild(profileWinsCount);
  profileCredit.appendChild(profileCreditTitle);
  profileCredit.appendChild(profileCreditCount);
  profileContainer.appendChild(dashboardSection);
  return dashboardSection;
}
