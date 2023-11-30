import { handleProfileRequest } from "../../listeners/profile/profile.mjs";
// import { profileHero } from "./sections/profileHero.mjs";
// import { editProfile } from "./sections/editProfile.mjs";
// import { profileDashboard } from "./sections/dashboard.mjs";
// import { biddingsWon, profileListings } from "./sections/biddings.mjs";
export async function displayProfile() {
  try {
    const profile = await handleProfileRequest();
    console.log("Profile from UI", profile);
    // const profileContainer = document.querySelector("#profile_content");

    // From sections
    // profileHero(profile);
    // editProfile(profile);
    // profileDashboard(profile);
    // biddingsWon(profile);
    // profileListings(profile);

    // Endpoint
    // profileContainer.appendChild(heroSection);
    // profileContainer.appendChild(hero);
    // profileContainer.appendChild(edit);
  } catch (error) {
    console.error("Error displaying profile", error);
  }
}
// displayProfile();
