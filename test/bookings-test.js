import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Booking';

describe('Booking', function() {
  let booking;

  const mockBooking = {
    id: 4,
    userID: 1,
    date: "31/08/2019",
    roomNumber: 8
  }

  beforeEach(function() {
    booking = new Booking(mockBooking);
  });

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', function() {
    expect(booking).to.be.an.instanceof(Booking);
  });

  it('should have an id', function() {
    expect(booking.id).to.equal(4);
  });

  it('should have a user id', function() {
    expect(booking.userID).to.equal(1);
  });

  it('should have a date', function() {
    expect(booking.date).to.equal("31/08/2019");
  });
});
