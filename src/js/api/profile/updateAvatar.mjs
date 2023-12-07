import { api_profiles } from "../../api/env/env.mjs";
import { loadToken } from "../../storage/storage.mjs";
import { headers } from "../../auth/headers.mjs";

export async function updateAvatar(avatar) {
  try {
    const profile = loadToken("profile");
    const name = profile.name;

    const path = `${name}/media`;
    const getUrl = `${api_profiles}/${path}`;

    const response = await fetch(getUrl, {
      method: "PUT",
      headers: headers("application/json"),
      body: JSON.stringify(avatar),
    });

    if (response.ok) {
      console.log("Avatar updated successfully");
    } else {
      console.error(`Error updating avatar: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error("Error updating avatar:", error.message);
  }
}
