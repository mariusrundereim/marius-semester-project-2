export function handleHighestBidder(bids) {
  if (bids.length === 0) {
    return null; // or any default value you want to return when the array is empty
  }

  const lastBid = bids[bids.length - 1];
  if (
    lastBid &&
    lastBid.amount !== undefined &&
    lastBid.bidderName !== undefined
  ) {
    return { amount: lastBid.amount, bidderName: lastBid.bidderName };
  } else {
    return null; // or handle the case where the last bid is missing required properties
  }
}
