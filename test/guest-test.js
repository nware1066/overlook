import chai from 'chai';
const expect = chai.expect;
import Manager from '../src/Manager';
import Guest from '../src/Guest';
import mockGuests from './testData/mockGuests'
import mockRooms from './testData/mockRooms'
import mockBookings from './testData/mockBookings'

describe('Guest', function() {
  let guest1, guest2, guest3;

  beforeEach(function() {
    let mockAllData = {bookings: mockBookings, rooms: mockRooms}
    guest1 = new Guest(mockGuests[0], mockAllData)
    guest2 = new Guest(mockGuests[1], mockAllData)
    guest3 = new Guest(mockGuests[2], mockAllData)
  });

  it('should be a function', function() {
    expect(Guest).to.be.a('function');
  });

  it('should have an id', function() {
    expect(guest1.id).to.be.equal(1);
    expect(guest2.id).to.be.equal(2);
    expect(guest3.id).to.be.equal(3);
  });

  it('should have name', function() {
    expect(guest1.name).to.be.equal("Malcolm Reyolds");
    expect(guest2.name).to.be.equal("Zoe Washburn");
  });

  it('should have password', function() {
    expect(guest1.password).to.be.equal("overlook2020");
    expect(guest2.password).to.be.equal("overlook2020");
  });

  it('should have bookings', function() {
    expect(guest1.bookings.length).to.equal(mockBookings.length);
    expect(guest2.bookings.length).to.equal(mockBookings.length);
  });

  it('should have totalSpent of 0 by default', function() {
    expect(guest1.totalSpent).to.be.equal(0);
    expect(guest2.totalSpent).to.be.equal(0);
  });

  //
  // it('should be able to add a booking', function() {
  //   expect(guest1.booking).to.be.deep.equal([0]);
  //   guest1.addBooking()
  //   expect(guest1.totalSpent).to.be.deep.equal([1]);
  // });
});
