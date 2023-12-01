import { updateAvatar } from "../../api/profile/updateAvatar.mjs";

export async function updateProfileAvatar() {
  const updateAvatarForm = document.querySelector("#updateAvatar_form");

  updateAvatarForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const media = {
      avatar: form.newAvatar.value,
    };

    const result = await updateAvatar(media);
    console.log(result);
    //   console.log(media);
  });
}
