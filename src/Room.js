import Guest from './Guest';
import Booking from './Booking';
import Manager from './Manager';

class Room {
  constructor(hotelData) {
    this.number = hotelData.number;
    this.roomType = hotelData.roomType;
    this.bidet = hotelData.bidet;
    this.bedSize = hotelData.bedSize;
    this.numBeds = hotelData.numBeds;
    this.costPerNight = hotelData.costPerNight;
  }
}

export default Room;
