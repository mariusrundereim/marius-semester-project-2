import { api_register } from "../api/env/env.mjs";
import { headers } from "./headers.mjs";
import { formValidation } from "../components/formValidation.mjs";
export async function registerUser(user) {
  try {
    const postData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify(user),
    };

    const response = await fetch(`${api_register}`, postData);
    if (response.ok) {
      window.location = `/src/html/login.html`;
    } else {
      alert("Not ok");
    }
  } catch (error) {
    console.log(error);
  }
}
