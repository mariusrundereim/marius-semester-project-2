import { api_register } from "../api/env/env.js";
import { headers } from "./headers.js";
// import { api_register } from "../env/env.js";
// import { headers } from "../../auth/headers.js";
export async function registerUser(user) {
  try {
    const postData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify(user),
    };

    const response = await fetch(`${api_register}`, postData);
    if (response.ok) {
      window.location = `./login.html`;
    } else {
      alert("Not ok");
    }
  } catch (error) {
    console.log(error);
  }
}
