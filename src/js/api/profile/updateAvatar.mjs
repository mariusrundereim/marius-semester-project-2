import { api_profiles } from "../../api/env/env.mjs";
import { loadToken } from "../../storage/storage.mjs";
import { headers } from "../../auth/headers.mjs";

export function profileAvatar() {
  const profile = loadToken("profile");
  const { name, avatar } = profile;
  console.log(profile.avatar);
  console.log(`${api_profiles}/${name}/media`);
}
profileAvatar();

export async function updateAvatar(avatar) {
  try {
    const { name } = loadToken("profile");
    const path = `${name}/media`;
    const getUrl = `${api_profiles}${path}`;

    const response = await fetch(getUrl, {
      method: "PUT",
      headers: headers("application/json"),
      body: JSON.stringify({ avatar }),
    });

    if (response.ok) {
      // updateAvatarFormListener();
      console.log("Avatar updated successfully");
    } else {
      console.error(`Error updating avatar: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error updating avatar:", error.message);
  }
}
updateAvatar();
