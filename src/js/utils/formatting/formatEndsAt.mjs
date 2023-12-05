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

// export function createFormatEndsAt(formatFunction) {
//   return function formatEndsAt(endsAt) {
//     const updateRemainingTime = () => {
//       const endDate = new Date(endsAt).getTime();
//       const now = new Date().getTime();
//       const distance = endDate - now;

//       if (distance <= 0) {
//         // If the endsAt date has passed, set innerText to "Expired"
//         formatFunction("Expired");
//       } else {
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         const timeRemaining = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//         // Set innerText to the remaining time
//         formatFunction(timeRemaining);
//       }
//     };

//     // Call updateRemainingTime immediately to set the initial value
//     updateRemainingTime();

//     // Set up setInterval to update remaining time every second
//     const intervalId = setInterval(() => {
//       updateRemainingTime(); // Update immediately
//       updateRemainingTime(); // Update again after 1 second
//     }, 1000);

//     // Return the intervalId so you can use clearInterval if needed
//     return intervalId;
//   };
// }
