class Guest {
  constructor(guestData) {
    this.id = guestData.id;
    this.name = guestData.name;
    this.username = guestData.userName;
    this.password = 'overlook2020'
    this.bookings = [];
    this.totalSpent = 0;
  }

  addBooking(booking) {
    this.bookings.push(booking)
  }
}
export default Guest;


// should be able to log in and see dashboard
