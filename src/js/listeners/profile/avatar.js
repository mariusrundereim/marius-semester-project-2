import { updateAvatar } from "../../api/profile/updateProfile.js";

/**
 * Updates the profile avatar.
 * @async
 * @function updateProfileAvatar
 */
export async function updateProfileAvatar() {
  const updateAvatarForm = document.querySelector("#updateAvatar_form");

  updateAvatarForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formInput = updateAvatarForm.querySelector("#new_avatar");
    const newAvatarUrl = formInput.value;
    await updateAvatar({ avatar: newAvatarUrl });
  });
}
