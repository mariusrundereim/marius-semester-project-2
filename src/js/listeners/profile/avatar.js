import { updateAvatar } from "../../api/profile/updateAvatar.js";

export async function updateProfileAvatar() {
  const updateAvatarForm = document.querySelector("#updateAvatar_form");

  updateAvatarForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Access the formInput directly
    const formInput = updateAvatarForm.querySelector("#new_avatar");

    // Get the new avatar URL from the form input
    const newAvatarUrl = formInput.value;
    console.log("New avatar URL:", newAvatarUrl);

    // Update the avatar image source
    //avatarImage.src = newAvatarUrl;

    // Call the updateAvatar function with the new avatar URL
    await updateAvatar({ avatar: newAvatarUrl });

    console.log("Avatar updated:", newAvatarUrl);
  });
}

// export async function updateProfileAvatar() {
//   const updateAvatarForm = document.querySelector("#updateAvatar_form");

//   updateAvatarForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const formInput = form.querySelector("#new_avatar");

//     const media = {
//       avatar: formInput.value,
//     };

//     await updateAvatar(media);
//   });
// }

// import { updateAvatar } from "../../api/profile/updateAvatar.js";

// export async function updateProfileAvatar() {
//   const updateAvatarForm = document.querySelector("#updateAvatar_form");

//   updateAvatarForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     console.log("Form:", form);
//     const media = {
//       avatar: form.new_avatar.value,
//     };
//     console.log("Media", media);

//     const update = await updateAvatar(media);
//     console.log("Update:", update);
//   });
// }
