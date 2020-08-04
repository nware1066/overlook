

class Hotel {
  constructor(guests, rooms, bookings) {
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
    this.availableRooms = [];
    this.bookedRooms = [];
  }

  findTodaysBookings(date) {
    let todaysBookings = this.bookings.filter(booking => {
      return booking.date === date;
    });
    return todaysBookings;
  }

  findAvailableRooms(date) {
    return this.rooms.filter(room => {
      return !this.findTodaysBookings(date).find(booking => {
        return booking.roomNumber === room.number;
      });
    });
  }

  totalAvailableRooms(date) {
    return this.findAvailableRooms(date).length;
  }

  findOccupancyByPercent(date) {
    const numOccupiedRooms = this.rooms.length - this.findAvailableRooms(date).length;
    let percentAvailable = (numOccupiedRooms / this.rooms.length) * 100;
    return percentAvailable;
  }

  findDailyRevenue(date) {
    let dailyRevenue = this.rooms.reduce((dailyRevenue, room) => {
      if (this.isRoomBooked(room.number, date)) {
        dailyRevenue += room.costPerNight;
      }
      return dailyRevenue;
    }, 0);
    return dailyRevenue;
  }

  isRoomBooked(roomNumber, date) {
    return Boolean(this.findTodaysBookings(date).find(booking => booking.roomNumber === roomNumber));
  }
}
export default Hotel;
