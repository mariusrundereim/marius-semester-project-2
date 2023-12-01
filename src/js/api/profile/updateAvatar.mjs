import { api_profiles } from "../../api/env/env.mjs";
// import { api_profilesX } from "../../api/env/env.mjs";
import { loadToken } from "../../storage/storage.mjs";
import { headers } from "../../auth/headers.mjs";

// export function profileAvatar() {
//   const profile = loadToken("profile");
//   const { name, avatar } = profile;
//   console.log(profile.avatar);
//   console.log(`${api_profiles}/${name}/media`);
// }
// profileAvatar();

export async function updateAvatar(avatar) {
  try {
    const { name } = loadToken("profile");
    const path = `${name}/media`;
    const getUrl = `${api_profiles}/${path}`;
    console.log("URL:", getUrl);

    // avatar = avatar.avatar;
    const newAvatar = avatar.avatar;
    console.log("Avatar:", newAvatar);
    const response = await fetch(getUrl, {
      method: "PUT",
      headers: headers("application/json"),
      // "Content-Type": "application/json",
      body: JSON.stringify({ newAvatar }),
    });
    console.log(response);

    if (response.ok) {
      // updateAvatarFormListener();
      console.log("Avatar updated successfully");
    } else {
      console.error(`Error updating avatar: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error("Error updating avatar:", error.message);
  }
}
// updateAvatar();
