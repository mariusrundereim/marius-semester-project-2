export function viewListingDetails(listing) {
  console.log(listing.seller.name);
  console.log("Naaame", listing.seller.name);
  console.log(listing.media);
  console.log(listing.description);
  console.log(listing.endsAt);
  console.log(listing.bids[0].bidderName);
  console.log(listing.title);

  const listingDetails = document.querySelector("#listing_container");
}
