import { api_profiles } from "../../api/env/env.mjs";
// import { loadToken } from "../../storage/storage.mjs";
import { headers } from "../../auth/headers.mjs";
import { getProfile } from "./profile.mjs";

export async function updateAvatar(avatar) {
  try {
    // const { name } = loadToken("profile");

    const name = getProfile();
    console.log("Name:", name);
    const path = `${name}/media`;
    console.log("Path:", path);
    const getUrl = `${api_profiles}/${path}`;
    console.log("URL:", getUrl);

    // console.log("Test", profileResult);

    avatar = avatar.avatar;
    // const newAvatar = avatar.avatar;
    const response = await fetch(getUrl, {
      method: "PUT",
      headers: headers("application/json"),
      // "Content-Type": "application/json",
      body: JSON.stringify({ avatar }),
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

// (async () => {
//   await getProfile();
// })();
