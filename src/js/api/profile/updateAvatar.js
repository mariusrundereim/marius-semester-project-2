import { api_profiles } from "../env/env.js";
import { loadToken } from "../../storage/storage.js";
import { headers } from "../../auth/headers.js";

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
      // location.reload();
    } else {
      console.error(`Error updating avatar: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error("Error updating avatar:", error.message);
  }
}
