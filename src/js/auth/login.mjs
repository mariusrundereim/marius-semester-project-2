import { api_login } from "../api/env/env.mjs";
import { headers } from "./headers.mjs";
import { saveToken } from "../storage/storage.mjs";

export async function login(user) {
  try {
    const postData = {
      method: "POST",
      body: JSON.stringify(user),
      headers: headers("application/json"),
    };

    const response = await fetch(`${api_login}`, postData);
    const profile = await response.json();

    if (response.ok) {
      saveToken("token", profile.accessToken);
      delete profile.accessToken;
      saveToken("profile", profile);
      window.location = `index.html?name=${profile.name}`;
      return;
    } else {
      alert("please fill in: valiud username and valid password");
    }
  } catch (error) {
    console.log(error);
  }
}
