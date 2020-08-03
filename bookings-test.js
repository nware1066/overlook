mport chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking';
import Guest from '../src/Guest';
import mockGuests from './testData/mockGuests'
import mockRooms from './testData/mockRooms'
import mockBookings from './testData/mockBookings'

describe('Booking', function() {
  let booking;

  beforeEach(function() {
    booking = new Booking()
  });

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });
