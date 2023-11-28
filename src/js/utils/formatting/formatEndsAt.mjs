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

  // setInterval(updateRemainingTime, 1000);
  // console.log(timeRemaining);
  return timeRemaining;
}

// const endDate = new Date("2023-12-01T00:00:00.000Z").getTime();
// // const endDate = new Date().getTime();
// export function updateRemainingTime() {
//   const now = new Date().getTime();
//   const distance = endDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   //   console.log(
//   //     `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds}`
//   //   );

//   const timeRemaining = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//   // console.log(timeRemaining);

//   return timeRemaining;
// }
// updateRemainingTime();
// setInterval(updateRemainingTime, 1000);
