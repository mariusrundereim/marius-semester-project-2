import { api_profiles } from "../api/env/env.mjs";
import { getSearchParams } from "../api/searchParams.mjs";
import { headers } from "../auth/headers.mjs";

export async function getProfile() {
  try {
    const getProfileData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };
    const name = getSearchParams().name;
    const response = await fetch(`${api_profiles}/${name}`, getProfileData); // ?_listings=true

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      console.log(result.name);
      renderProfile(result);
      //viewProfile(result);
    } else {
      alert("Please log in");
    }
  } catch (error) {}
}
getProfile();
