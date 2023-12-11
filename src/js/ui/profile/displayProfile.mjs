import { handleProfileRequest } from "../../listeners/profile/profile.mjs";
import {
  profileHero,
  editProfile,
  profileDashboard,
} from "./sections/profileHero.mjs";
import { biddingSection } from "./sections/biddings.mjs";
import { updateProfileAvatar } from "../../listeners/profile/avatar.mjs";

export async function displayProfile() {
  try {
    const profile = await handleProfileRequest();
    console.log("Profile from UI", profile);

    // From sections
    profileHero(profile);
    editProfile(profile);
    profileDashboard(profile);
    biddingSection(profile);
    updateProfileAvatar(profile);

    // Toggle edit profile
    function toggleEditProfile() {
      const toggleProfileBtn = document.querySelector("#edit_profile_btn");

      toggleProfileBtn.addEventListener("click", () => {
        const editSection = document.querySelector("#edit_profile");
        editSection.classList.toggle("hidden");
      });
    }
    toggleEditProfile();
  } catch (error) {
    console.error("Error displaying profile", error);
  }
}
