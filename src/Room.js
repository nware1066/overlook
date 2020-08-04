import Guest from './Guest';
import Booking from './Booking';
import Manager from './Manager';

class Room {
  constructor(hotelData) {
    this.number = hotelData.rooms.number;
    this.roomType = hotelData.rooms.roomType;
    this.bidet = hotelData.rooms.bidet;
    this.bedSize = hotelData.rooms.bedSize;
    this.numBeds = hotelData.rooms.numBeds;
    this.costPerNight = hotelData.rooms.costPerNight;
    console.log('room', hotelData.rooms.number);
  }

}

export default Room;
