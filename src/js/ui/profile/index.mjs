/*
import { getProfile } from "../../api/profile/profile.mjs";

export async function renderProfile() {
  try {
    const result = await getProfile();
    const profileHero = document.querySelector("#profile_hero");
    const profileInfo = document.querySelector("#profile_info");

    console.log(result);
    if (result) {
      renderProfileHero(profileHero, result);
      renderProfileInfo(profileInfo, result);
    }
  } catch (error) {
    console.error(error);
  }
}
renderProfile();

// Hero
export function renderProfileHero(container, result) {
  container.innerHTML = `
  
  <div
  class="flex flex-col sm:flex-row h-30 justify-between items-center"
>
  <div class="flex gap-4">
    <img
      class="h-20 w-20 rounded-full object-cover"
      src="${result.avatar}"
      alt=""
    />
    <div class="flex justify-center items-center">
      <h2 class="text-2xl font-bold">${result.name}</h2>
      <!-- Icon-->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 ms-2"
      >
        <path
          fill-rule="evenodd"
          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>

  <button class="p-2 rounded-xl text-white bg-brand-dark">
    Change avatar
  </button>
</div>
  `;
}

// Info
export function renderProfileInfo(container, result) {
  container.innerHTML = `
  <!--Wins-->
        <div
          class="basis-1/2 p-4 bg-brand-color rounded-xl min-h-full h-40 flex flex-col justify-center items-center"
        >
          <h2 class="text-2xl">Wins</h2>
          <p class="text-4xl font-medium">${result.wins.length}</p>
        </div>
        <!-- Credit-->
        <div
          class="basis-1/2 p-4 bg-brand-dark text-brand-light rounded-xl min-h-full h-40 flex flex-col justify-center items-center"
        >
          <h2 class="text-2xl">Total Credit</h2>
          <p class="text-4xl font-medium">${result.credits}</p>
        </div>
        `;
}
*/
