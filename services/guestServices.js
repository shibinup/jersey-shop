export const getGuestId = () => {
  let guestId = localStorage.getItem("guestId");

  if (!guestId) {
    guestId = crypto.randomUUID(); // unique id
    localStorage.setItem("guestId", guestId);
  }
  return guestId;
};