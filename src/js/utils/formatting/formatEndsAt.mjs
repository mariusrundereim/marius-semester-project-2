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

  return timeRemaining;
}
