import { api_profiles } from "../env/env.mjs";
import { loadToken } from "../../storage/storage.mjs";
import { headers } from "../../auth/headers.mjs";

export async function updateAvatar(avatar) {
  try {
    const { name } = loadToken("profile");
    const path = `${name}/media`;
    const getUrl = `${api_profiles}${path}`;

    const response = await fetch(getUrl, {
      method: "PUT",
      headers: headers("application/json"), // assuming headers function sets the Authorization header
      body: JSON.stringify(avatar),
    });

    if (response.ok) {
      console.log("Avatar updated successfully");
    } else {
      console.error(`Error updating avatar: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error updating avatar:", error.message);
  }
}
