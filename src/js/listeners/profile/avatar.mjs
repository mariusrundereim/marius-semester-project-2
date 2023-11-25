import { api_profiles } from "../../api/env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { loadToken } from "../../storage/storage.mjs";

const PROFILE_API = api_profiles;
const APPLICATION_JSON = "application/json";

async function updateAvatar(name, mediaLink) {
  try {
    const putData = {
      method: "PUT",
      headers: headers(APPLICATION_JSON),
      body: JSON.stringify({ avatar: mediaLink.avatar }),
    };

    const response = await fetch(
      `${PROFILE_API}/profiles/${name}/media`,
      putData
    );

    if (response.ok) {
      location.href = `/src/html/profile.html?name=${name}`;
    }
  } catch (error) {
    console.error("Error updating avatar:", error.message);
  }
}

const updateAvatarForm = document.querySelector("#updateAvatar_form");

if (updateAvatarForm) {
  updateAvatarForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const media = {
      avatar: form.newAvatar.value,
    };

    try {
      const token = loadToken();
      const profile = await fetchProfile(token);
      const { name } = profile;
      await updateAvatar(name, media);
    } catch (error) {
      console.error("Error fetching profile:", error.message);
    }
  });
}

async function fetchProfile(token) {
  const response = await fetch(`${PROFILE_API}/${name}`, {
    method: "GET",
    headers: headers(APPLICATION_JSON, token),
  });

  if (!response.ok) {
    throw new Error(`Error fetching profile: ${response.statusText}`);
  }

  const profiles = await response.json();
  if (profiles.length > 0) {
    return profiles[0];
  } else {
    throw new Error("No profile found");
  }
}
