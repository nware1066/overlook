import chai from 'chai';
const expect = chai.expect;
import Manager from '../src/Manager';
import Guest from '../src/Guest';
import mockGuests from './testData/mockGuests'
import mockRooms from './testData/mockRooms'
import mockBookings from './testData/mockBookings'

describe('Guest', function() {
  let manager;

  beforeEach(function() {
    manager = new Guest()
  });

  it('should be a function', function() {
    expect(Guest).to.be.a('function');
  });

  it('should have an id')
});
