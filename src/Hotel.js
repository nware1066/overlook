

class Hotel {
  constructor(guests, rooms, bookings) {
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
  }

  findTodaysBookings(date) {
    let todaysBookings = this.bookings.filter(booking => {
      return booking.date === date;
    })
     return todaysBookings
  }

  findAvailableRooms(date) {
    let bookedRooms = this.FindTodaysBookings(date).map(booking => {
      return booking.roomNumber
    });
    return this.rooms.filter(room => {
      return !bookedRooms.includes(room.number);
    })
  }

  findCostOfBookings() {

  }
}
export default Hotel;
