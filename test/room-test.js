import chai from 'chai';
const expect = chai.expect;
import Room from '../src/Room';

describe('Room', function() {
  let room;

  const mockRoom = {
    number: 8,
    roomType: "junior suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 398.47
  }

  beforeEach(function() {
    room = new Room(mockRoom);
  });

  it('should be a function', function() {
    expect(Room).to.be.a('function');
  });

  it('should be an instance of Room', function() {
    expect(room).to.be.an.instanceof(Room);
  });

  it('should have a number', function() {
    expect(room.number).to.equal(8);
  });

  it('should have a roomType', function() {
    expect(room.roomType).to.equal("junior suite");
  });

  // it('should have a date', function() {
  //   expect(booking.date).to.equal("31/08/2019");
  // });
  //
  // it('should have a room number', function() {
  //   expect(booking.roomNumber).to.equal(8);
  // });
  //
  // it('should no room service charges by default', function() {
  //   expect(booking.roomServiceCharges).to.deep.equal([]);
  // });

});
