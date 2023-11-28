import { handleProfileRequest } from "../../listeners/profile/catchProfile.mjs";
export async function displayProfile() {
  try {
    const profile = await handleProfileRequest();
    // console.log("Profile from UI", profile);
    // Render the profile data to the UI
  } catch (error) {
    console.error("Error displaying profile", error);
  }
}
// displayProfile();
