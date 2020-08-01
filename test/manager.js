import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Manager from '../src/Manager';
import Guest from '../src/Guest';
import { guests, rooms, bookings } from './test/testData'
