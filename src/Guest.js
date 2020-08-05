class Guest {
  constructor(guestData, allData) {
    this.id = guestData.id;
    this.name = guestData.name;
    this.username = guestData.userName;
    this.password = 'overlook2020'
    this.bookings = allData.bookings;
    this.totalSpent = 0;
    this.rooms = allData.rooms;
  }

  getAllBookings() {
    return this.bookings.filter(booking => this.id === booking.userID);
  }

  getAllSpending() {
    return this.getAllBookings().reduce((total, booking) => {
      var selectedRoom = this.rooms.find(room => {
        return room.number === booking.roomNumber;
      });
      total += selectedRoom.costPerNight;
      return total;
    }, 0);
  }

  

  addBooking(booking) {
    this.bookings.push(booking)
  }
}
export default Guest;


// should be able to log in and see dashboard
