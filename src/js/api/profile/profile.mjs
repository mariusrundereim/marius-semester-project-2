// import { api_profiles } from "../api/env/env.mjs";
// import { getSearchParams } from "../api/searchParams.mjs";
// import { headers } from "../auth/headers.mjs";
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

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      alert("Please log in");
    }
  } catch (error) {}
}
getProfile();
