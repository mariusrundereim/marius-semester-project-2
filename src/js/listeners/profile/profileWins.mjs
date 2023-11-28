export function profileWins(profile) {
  const profileWins = profile.wins;
  profileWins.forEach((win) => {
    console.log("Win", win.title);
  });
  return profileWins;
}
