import { profileCard } from "../../components/card/profileCard.mjs";

export function viewActiveBids(profile) {
  const activeBids = profile.listings;

  // console.log("Card:", card);

  activeBids.forEach((listing) => {
    const card = profileCard(
      listing.media,
      listing.title,
      listing.bids,
      listing.endsAt,
      listing.id
    );
    console.log(card);
    return card;
  });
  // console.log("Active Bids", activeBids);
  return activeBids;
}

// Use profilecard to display the active bids
