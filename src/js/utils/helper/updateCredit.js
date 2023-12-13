export function updateCredits(amount) {
  try {
    // Retrieve the users profile from localStorage
    const profileString = localStorage.getItem("profile");

    if (!profileString) {
      console.log("No profile found in localStorage");
      return false;
    }

    const profile = JSON.parse(profileString);

    // Check if the user has enough credits to bid
    if (!profile || isNaN(profile.credits) || profile.credits < amount) {
      alert("You do not have enough credits to bid on this listing.");
      console.log("Not enough credits or invalid profile structure");
      return false;
    }

    // Update the user's total credits
    profile.credits -= amount;

    // Save the updated profile back to localStorage
    localStorage.setItem("profile", JSON.stringify(profile));

    return true;
  } catch (error) {
    console.error("Error updating profile credits:", error);
    return false;
  }
}
