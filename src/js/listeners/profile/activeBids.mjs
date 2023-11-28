export function viewActiveBids(profile) {
  const activeBids = profile.listings;
  activeBids.forEach((listing) => {
    console.log("Listing::", listing.title);
  });
  console.log("Active Bids", activeBids);
  return activeBids;
}
