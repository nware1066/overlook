class Booking {
  constructor(hotelData) {
    this.userID = hotelData.bookings.userID;
    this.date = hotelData.bookings.date;
    this.roomNumber = hotelData.bookings.roomNumber;
  }
}

export default Booking;
