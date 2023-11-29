import { handleProfileRequest } from "../../listeners/profile/profile.mjs";
import { profileHero } from "./sections/profileHero.mjs";
import { editProfile } from "./sections/editProfile.mjs";

export async function displayProfile() {
  try {
    const profile = await handleProfileRequest();
    console.log("Profile from UI", profile);
    // const profileContainer = document.querySelector("#profile_content");

    // From sections
    profileHero(profile);
    editProfile(profile);

    // Endpoint
    // profileContainer.appendChild(heroSection);
    // profileContainer.appendChild(hero);
    // profileContainer.appendChild(edit);
  } catch (error) {
    console.error("Error displaying profile", error);
  }
}
// displayProfile();
