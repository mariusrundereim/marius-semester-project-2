import { api_profiles } from "../../api/env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { loadToken } from "../../storage/storage.mjs";

const PROFILE_API = api_profiles;
const APPLICATION_JSON = "application/json";

async function updateAvatar(mediaLink, profile) {
  try {
    const { name } = profile;

    const putData = {
      method: "PUT",
      headers: headers(APPLICATION_JSON),
      body: JSON.stringify(mediaLink),
    };

    const response = await fetch(`${PROFILE_API}/${name}/media`, putData);
  } catch (error) {
    console.error("Error updating avatar:", error.message);
  }
}
