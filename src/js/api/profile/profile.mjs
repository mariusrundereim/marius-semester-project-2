import { api_profiles } from "../../api/env/env.mjs";
import { getSearchParams } from "../searchParams.mjs";
import { headers } from "../../auth/headers.mjs";

export async function getProfile() {
  try {
    const getProfileData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };
    const name = getSearchParams().name;
    const response = await fetch(
      `${api_profiles}/${name}?_listings=true`,
      getProfileData
    ); // ?_listings=true

    if (!response.ok) {
      // displayListings(); STRENGT FORBUTT
      document.querySelector("body").innerHTML = "Error";
      throw new Error("This is oing to have to change or something");
    }

    const result = await response.json();
    const profileResult = result;
    console.log("Profile from API", profileResult);
    return profileResult;
  } catch (error) {
    console.error("Error getting profile", error);
  }
}
