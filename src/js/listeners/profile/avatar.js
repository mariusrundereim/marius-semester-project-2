import { updateAvatar } from "../../api/profile/updateAvatar.js";

export async function updateProfileAvatar() {
  const updateAvatarForm = document.querySelector("#updateAvatar_form");

  updateAvatarForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formInput = updateAvatarForm.querySelector("#new_avatar");

    const newAvatarUrl = formInput.value;
    await updateAvatar({ avatar: newAvatarUrl });
  });
}
