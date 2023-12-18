import { handleProfileRequest } from "../../listeners/profile/profile.js";
import {
  profileHero,
  editProfile,
  profileDashboard,
} from "./sections/profileHero.js";
import { biddingSection } from "./sections/biddings.js";
import { updateProfileAvatar } from "../../listeners/profile/avatar.js";

export async function displayProfile() {
  try {
    const profile = await handleProfileRequest();

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
