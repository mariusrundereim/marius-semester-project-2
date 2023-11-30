// import { profileCard } from "../../components/card/profileCard.mjs";
import { handleProfileRequest } from "../../listeners/profile/profile.mjs";
import { profileHero } from "./sections/profileHero.mjs";
import { editProfile } from "./sections/editProfile.mjs";
import { profileDashboard } from "./sections/dashboard.mjs";
import { biddingSection } from "./sections/biddings.mjs";

export async function displayProfile() {
  try {
    const profile = await handleProfileRequest();
    console.log("Profile from UI", profile);

    // From sections
    profileHero(profile);
    editProfile(profile);
    profileDashboard(profile);
    biddingSection(profile);
  } catch (error) {
    console.error("Error displaying profile", error);
  }
}
