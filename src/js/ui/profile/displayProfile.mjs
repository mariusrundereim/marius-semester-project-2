import { handleProfileRequest } from "../../listeners/profile/profile.mjs";
export async function displayProfile() {
  try {
    const profile = await handleProfileRequest();
    console.log("Profile from UI", profile);
  } catch (error) {
    console.error("Error displaying profile", error);
  }
}
// displayProfile();
