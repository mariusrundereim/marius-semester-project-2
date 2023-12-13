import { getProfile } from "../../api/profile/profile.js";
import { displayProfile } from "../../ui/profile/displayProfile.js";
import { viewActiveBids } from "./activeBids.js";

export async function handleProfileRequest() {
  try {
    const profile = await getProfile();
    // console.log("Profile from listener", profile);

    viewActiveBids(profile);

    return profile;
  } catch (error) {
    console.error("Error handling", error);
  }
}
displayProfile();
