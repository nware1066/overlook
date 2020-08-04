

class Hotel {
  constructor(guests, rooms, bookings) {
    this.guests = guests;
    this.rooms = rooms.rooms;
    this.bookings = bookings;
  }

  findTodaysBookings(date) {
    let todaysBookings = this.bookings.filter(booking => {
      return booking.date === date;
    })
     return todaysBookings
  }

  findAvailableRooms(date) {
    let bookedRooms = this.findTodaysBookings(date).map(booking => {
      return booking.roomNumber
    });
  
    let availableRooms =  this.rooms.filter(room => {
      return !bookedRooms.includes(room.number);
    })
    return availableRooms;
  }


}
export default Hotel;
