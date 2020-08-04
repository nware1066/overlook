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

describe('Hotel', function() {
  const today = moment().format('YYYY/MM/DD');
  let hotel;

    beforeEach(function() {
      hotel = new Hotel(mockGuests, mockRooms, mockBookings);
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
      const availableRooms = hotel.findAvailableRooms(today)
      expect(availableRooms.length).to.equal(3);
    })

    it('should be able to find the percentage of occupied rooms', function() {
      expect(hotel.findOccupancyByPercent(today)).to.equal(25);
    })

    it('should be able to calculate the total revenue for a given date', function() {
      expect(hotel.findDailyRevenue(today)).to.equal(289)
    })
  })
