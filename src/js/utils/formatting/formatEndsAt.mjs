const endDate = new Date("2023-12-01T00:00:00.000Z").getTime();
export function updateRemainingTime() {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //   console.log(
  //     `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds}`
  //   );

  return `${days}d ${hours}h ${minutes}m`;
}
updateRemainingTime();
setInterval(updateRemainingTime, 1000);
