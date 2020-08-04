class Guest {
  constructor(guessData) {
    this.id = guessData.id;
    this.name = guessData.name;
    this.username = guessData.userName;
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
