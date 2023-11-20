import { api_profiles } from "../api/env/env.mjs";
import { headers } from "../auth/headers.mjs";

export async function getProfiles() {
  const response = await fetch(`${api_profiles}`, {
    headers: headers("application/json"),
    body: JSON.stringify(),
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
}

getProfiles();
