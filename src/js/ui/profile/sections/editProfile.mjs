export function editProfile(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const editSection = document.createElement("section");
  const editSecInner = document.createElement("div");
  const title = document.createElement("h2");
  const form = document.createElement("form");
  const formLabel = document.createElement("label");
  const formInput = document.createElement("input");
  const formBtn = document.createElement("button");
  // Classes
  editSection.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "h-30",
    "p-4",
    "rounded-xl",
    "bg-brand-light"
  );
  editSecInner.classList.add("flex", "flex-col", "gap-4");
  form.classList.add("flex", "flex-col", "gap-4");
  form.id = "updateAvatar_form";
  title.classList.add("text-2xl", "font-bold");
  formLabel.classList.add("text-xl");
  formInput.classList.add("border", "border-gray-300", "rounded-xl", "p-2");
  formInput.id = "newAvatar";
  formBtn.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark",
    "w-32"
  );
  // Content
  title.textContent = "Edit Profile";
  formLabel.textContent = "Avatar URL";
  formInput.type = "text";
  formInput.name = "avatar";
  formInput.placeholder = "Inssert URL";
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
