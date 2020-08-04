

class Hotel {
  constructor(guests, rooms, bookings) {
    this.guests = guests;
    this.rooms = rooms.rooms;
    this.bookings = bookings;
    this.todaysBookings = [];
    this.bookedRooms = [];
  }

  findTodaysBookings(date) {
    let todaysBookings = this.bookings.filter(booking => {
      return booking.date === date;
    })
     return todaysBookings
  }

  findAvailableRooms(date) {
    return this.rooms.filter(room => {
      return !this.findTodaysBookings(date).find(booking => {
        return booking.roomNumber === room.number;
      });
    });
  }

  findOccupancyByPercent(date) {
    const numOccupiedRooms = this.rooms.length - this.findAvailableRooms(date).length;
    let percentAvailable = (numOccupiedRooms / this.rooms.length) * 100;
    return percentAvailable;
  }

}
export default Hotel;
