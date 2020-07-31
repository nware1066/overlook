class Guest {
  constructor(guestData) {
    this.id = guestData.id;
    this.name = guestData.name;
    this.username = `guestData.name${guestData.id}`;
    this.password = 'overlook2020'
    this.bookings = [];
    this.totalSpent = 0;
  }
}
export default Guest;
