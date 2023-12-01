// make an function that takes in a date and returns a string of the time remaining
// function parameter is when auction ends
// format days,hours,minutes,seconds

export function formatEndsAt(endsAt) {
  const endDate = new Date(endsAt).getTime();
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timeRemaining = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // return days;
  // setInterval(updateRemainingTime, 1000);
  // console.log(timeRemaining);
  return timeRemaining;
}
