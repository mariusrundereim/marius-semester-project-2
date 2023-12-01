import { updateAvatar } from "../../api/profile/updateAvatar.mjs";

export async function updateProfileAvatar() {
  const updateAvatarForm = document.querySelector("#updateAvatar_form");

  updateAvatarForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log("Form:", form);
    const media = {
      avatar: form.new_avatar.value,
    };
    console.log("Media", media);

    const update = await updateAvatar(media);
    console.log("Update:", update);
  });
}
