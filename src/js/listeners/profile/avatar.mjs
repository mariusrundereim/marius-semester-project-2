export function updateAvatarFormListener() {
  const updateAvatarForm = document.querySelector("#updateAvatar_form");
  if (updateAvatarForm) {
    updateAvatarForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const media = {
        avatar: form.newAvatar.value,
      };
      console.log(media);
    });
  }
}
updateAvatarFormListener();
