import chai from 'chai';
const expect = chai.expect;
import Manager from '../src/Manager';
import Guest from '../src/Guest';
import Booking from '../src/Guest';
import Hotel from '../src/Hotel';
import mockGuests from './testData/mockGuests';
import mockRooms from './testData/mockRooms';
import mockBookings from './testData/mockBookings';

const moment = require('moment');
let today = moment().format('YYY/MM/DD');
describe('Hotel', function() {
  let hotel, guest1, guest2, guest3, booking1, booking2, booking3, date;

    beforeEach(function() {
      hotel = new Hotel(mockGuests, mockRooms, mockBookings);
      guest1 = new Guest(mockGuests[0])
      guest2 = new Guest(mockGuests[1])
      guest3 = new Guest(mockGuests[2])
      booking1 = new Booking(mockBookings[0])
      booking2 = new Booking(mockBookings[1])
      booking3 = new Booking(mockBookings[2])
    });

    it('should be a function', function() {
      expect(Hotel).to.be.a('function');
    });

    it('should be able to find bookings for today', function() {
      expect(hotel.findTodaysBookings(today)).to.deep.equal([{
         userID: 1,
         date: today,
         roomNumber: 73
       }],)
    });

    it('should be able to find available rooms', function() {
      expect(hotel.findAvailableRooms(today).length).to.equal(3);
    })

    it ('should be able to find the percentage of occupied rooms', function() {
      expect(hotel.findOccupancyByPercent(today)).to.equal(25);
    })
  })
