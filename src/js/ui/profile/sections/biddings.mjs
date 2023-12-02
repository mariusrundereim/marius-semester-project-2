import { viewActiveBids } from "../../../listeners/profile/activeBids.mjs";
import { profileCard } from "../../../components/card/profileCard.mjs";

export function biddingSection(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const biddingSection = document.createElement("section");
  const biddingTopDiv = document.createElement("div");
  const bidTitle = document.createElement("h2");
  const bidLength = document.createElement("p");
  const bidList = document.createElement("div");

  // Classes
  biddingSection.classList.add("flex", "flex-col", "gap-4");
  biddingTopDiv.classList.add("flex", "flex-col", "gap-4");
  bidTitle.classList.add("text-2xl", "font-bold");
  bidList.classList.add("flex", "flex-col", "gap-4");

  // Content
  bidTitle.textContent = "Your Listings";
  bidLength.textContent = `${profile.listings.length} Listings`;

  // Append
  biddingSection.appendChild(biddingTopDiv);
  biddingTopDiv.appendChild(bidTitle);
  biddingTopDiv.appendChild(bidLength);
  biddingTopDiv.appendChild(bidList);

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
