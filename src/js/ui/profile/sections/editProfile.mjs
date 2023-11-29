export function editProfile(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const editSection = document.createElement("section");
  const editSecInner = document.createElement("div");
  const title = document.createElement("h2");
  const form = document.createElement("form");
  const formLabel = document.createElement("label");
  const formInput = document.createElement("input");
  const formBtn = document.createElement("button");
  editSection.classList.add("flex", "flex-col", "gap-4");
  editSecInner.classList.add("flex", "flex-col", "gap-4");
  title.classList.add("text-2xl", "font-bold");
  formLabel.classList.add("text-xl");
  formInput.classList.add("border", "border-gray-300", "rounded-xl", "p-2");
  formBtn.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark",
    "w-32"
  );
  title.textContent = "Edit Profile";
  formLabel.textContent = "Avatar URL";
  formInput.type = "text";
  formInput.name = "avatar";
  formInput.value = profile.avatar;
  formBtn.textContent = "Save";
  editSection.appendChild(title);
  editSection.appendChild(editSecInner);
  editSecInner.appendChild(form);
  form.appendChild(formLabel);
  form.appendChild(formInput);
  form.appendChild(formBtn);
  profileContainer.appendChild(editSection);
  return editSection;
}
