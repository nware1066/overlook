class Guest {
  constructor(guestData) {
    this.id = hotelData.users.id;
    this.name = hotelData.users.name;
    this.username = hotelData.users.userName;
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
