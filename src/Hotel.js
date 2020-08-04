

class Hotel {
  constructor(guests, rooms, bookings) {
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
  }

  findTodaysBookings() {
    let todaysBookings = this.bookings.filter(booking => {
      return booking.date === moment.format('YYY/MM/DD');
    })
     return todaysBookings
  }
}
export default Hotel;
