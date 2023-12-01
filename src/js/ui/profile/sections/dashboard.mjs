export function profileDashboard(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const dashboardSection = document.createElement("section");
  // Profile Wins and Total Credit
  const profileWins = document.createElement("div");
  const profileWinsTitle = document.createElement("h2");
  const profileWinsCount = document.createElement("p");
  const profileCredit = document.createElement("div");
  const profileCreditTitle = document.createElement("h2");
  const profileCreditCount = document.createElement("p");
  // Add classes
  dashboardSection.classList.add("flex", "flex-col", "md:flex-row", "gap-4");
  profileWins.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "basis-1/2",
    "min-h-[10rem]",
    "items-center",
    "justify-center",
    "bg-brand-color",
    "border",
    "border-gray-300",
    "rounded-xl",
    "p-2"
  );
  profileCredit.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "basis-1/2",
    "min-h-[10rem]",
    "items-center",
    "justify-center",
    "text-brand-light",
    "bg-brand-dark",
    "border",
    "border-gray-300",
    "rounded-xl",
    "p-2"
  );
  profileWinsTitle.classList.add("text-2xl", "font-bold");
  profileWinsCount.classList.add("text-2xl");
  profileCreditTitle.classList.add("text-2xl", "font-bold");
  profileCreditCount.classList.add("text-2xl");
  // Add content
  profileWinsTitle.textContent = "Wins";
  profileWinsCount.textContent = profile.wins.length;
  profileCreditTitle.textContent = "Total Credit";
  profileCreditCount.textContent = profile.credits;
  // Append
  dashboardSection.appendChild(profileWins);
  dashboardSection.appendChild(profileCredit);
  profileWins.appendChild(profileWinsTitle);
  profileWins.appendChild(profileWinsCount);
  profileCredit.appendChild(profileCreditTitle);
  profileCredit.appendChild(profileCreditCount);
  profileContainer.appendChild(dashboardSection);
  return dashboardSection;
}
