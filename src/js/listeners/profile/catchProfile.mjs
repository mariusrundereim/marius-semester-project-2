import { getProfile } from "../../api/profile/profile.mjs";

export async function handleProfileRequest() {
  try {
    const profile = await getProfile();
    // console.log("Profile from listener", profile);
    console.log("Teeest", profile.listings);
    // Loop for each profile listings
    const profileListings = profile.listings;
    profileListings.forEach((listing) => {
      console.log("Listing", listing.title);
    });
    // Handle logics here
    return profile;
  } catch (error) {
    console.error("Error handling", error);
  }
}
