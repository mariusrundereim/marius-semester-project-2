import { profileCard } from "../../components/card/profileCard.mjs";

export function viewActiveBids(profile) {
  const activeBids = profile.listings;

  const card = profileCard(
    activeBids[0].media,
    activeBids[0].title,
    activeBids[0].bids,
    activeBids[0].endsAt,
    activeBids[0].id
  );

  return activeBids;
}
