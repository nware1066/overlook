import chai from 'chai';
const expect = chai.expect;
import Manager from '../src/Manager';
import Guest from '../src/Guest';
import mockGuests from './testData/mockGuests'
import mockRooms from './testData/mockRooms'
import mockBookings from './testData/mockBookings'

describe('Manager', function() {
  let manager;

  beforeEach(function() {
    manager = new Manager({
      name:"manager",
    })
  });

  it('should be a function', function() {
    expect(Manager).to.be.a('function');
  });

  it('should have name of manager', function() {
    expect(manager.name).to.be.equal('manager');
  });
});
