import { getProfile } from "../../api/profile/profile.mjs";

export async function handleProfileRequest() {
  try {
    const profile = await getProfile();
    console.log("Profile from listener", profile);
    // Handle logics here
    return profile;
  } catch (error) {
    console.error("Error handling", error);
  }
}

// Catch profile from the api
// =============================================================
// import { profile } from '../../api/profile.mjs';
// import { profileView } from '../../views/profile/profileView.mjs';
// import { profileEditView } from '../../views/profile/profileEditView.mjs';
// import { profileEdit } from '../../api/profileEdit.mjs';
// import { profileDelete } from '../../api/profileDelete.mjs';
// import { profileDeleteView } from '../../views/profile/profileDeleteView.mjs';

// export const catchProfile = async () => {
//     const profileSection = document.querySelector('#profileSection');
//     const profileEditSection = document.querySelector('#profileEditSection');
//     const profileDeleteSection = document.querySelector('#profileDeleteSection');
//     const profileData = await profile();
//     if (profileData) {
//         profileSection.innerHTML = profileView(profileData);
//         profileEditSection.innerHTML = profileEditView(profileData);
//         profileDeleteSection.innerHTML = profileDeleteView(profileData);
//         profileEdit();
//         profileDelete();
//     }
//     }
// =============================================================
