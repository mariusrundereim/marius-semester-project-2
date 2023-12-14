import { api_profiles } from "./env/env.js";
import { headers } from "../auth/headers.js";
import { loadToken } from "../storage/storage.js";

export async function updateCredit() {
  const profile = loadToken("profile");
  const name = profile.name;

  const path = `${name}/credits`;
  const getUrl = `${api_profiles}/${path}`;

  const getRequestOptions = {
    method: "GET",
    headers: headers("application/json"),
  };

  try {
    const response = await fetch(getUrl, getRequestOptions);
    console.log(response);

    if (!response.ok) {
      throw new Error("Error updating credits");
    } else {
      console.log("Credits updated successfully");
    }

    const result = await response.json();

    let credit = result;
    console.log(credit.credits);

    return credit.credits;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
// updateCredit();