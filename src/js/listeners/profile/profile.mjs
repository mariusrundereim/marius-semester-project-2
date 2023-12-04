import { getProfile } from "../../api/profile/profile.mjs";
import { displayProfile } from "../../ui/profile/displayProfile.mjs";
import { viewActiveBids } from "./activeBids.mjs";

export async function handleProfileRequest() {
  try {
    const profile = await getProfile();
    // console.log("Profile from listener", profile);

    viewActiveBids(profile);
    // viewActiveBids(profile);
    return profile;
  } catch (error) {
    console.error("Error handling", error);
  }
}
displayProfile();

// (async () => {
//   await displayProfile();
// })();
