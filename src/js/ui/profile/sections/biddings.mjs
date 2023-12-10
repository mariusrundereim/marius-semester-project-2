import { viewActiveBids } from "../../../listeners/profile/activeBids.mjs";
import { profileCard } from "../../../components/card/profileCard.mjs";

export function biddingSection(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const biddingSection = document.createElement("section");
  const biddingTopDiv = document.createElement("div");
  const bidListDiv = document.createElement("div");
  const bidTitle = document.createElement("h2");
  const bidLength = document.createElement("p");
  const bidList = document.createElement("div");

  // Classes
  biddingSection.classList.add("my-4");
  biddingTopDiv.classList.add(
    "flex",
    "flex-col",
    "sm:flex-row",
    "justify-between",
    "items-center",
    "place-items-center",
    "gap-2",
    "sm:gap-4"
  );
  bidListDiv.classList.add("flex", "flex-col", "gap-4");
  bidTitle.classList.add("text-2xl", "font-bold", "mb-4");
  bidLength.classList.add("text-2xl", "mb-4");
  bidList.classList.add("flex", "flex-col", "gap-4");

  // Content
  bidTitle.textContent = "Your Listings";
  bidLength.textContent = `${profile.listings.length} Listings`;

  // Append
  biddingSection.appendChild(biddingTopDiv);
  biddingSection.appendChild(bidListDiv); // Ny
  biddingTopDiv.appendChild(bidTitle);
  biddingTopDiv.appendChild(bidLength);
  // biddingTopDiv.appendChild(bidList);
  bidListDiv.appendChild(bidList); // Ny

  const activeBids = viewActiveBids(profile);
  activeBids.forEach((bid) => {
    const card = profileCard(bid);
    bidList.appendChild(card);
  });

  // Display active bids and reuse the profileCard component
  // Use the card from profile > activebids.mjs

  profileContainer.appendChild(biddingSection);
  return biddingSection;
}
