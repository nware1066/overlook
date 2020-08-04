
import getAllFetchedData from './API';
import './css/base.scss';
import Hotel from './Hotel';
import Guest from './Guest';
import Manager from './Manager';
import Room from './Room';
import Booking from './Booking';
import domUpdates from './updateDom';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

let allData;
let hotel;
let manager;
let currentGuest;

const moment = require('moment');

getAllFetchedData().then(fetchedData => {
    hotel = new Hotel(fetchedData.users, fetchedData.rooms, fetchedData.bookings);
    allData = fetchedData;
    console.log('hotel', hotel)
  })

let dateToday = moment().format('YYYY/MM/DD');
let loginSubmitButton = document.querySelector(".login-submit-button");
let login = document.querySelector(".login-page");
let guestDashboard = document.querySelector(".guest-dashboard");
let availableRooms = document.querySelector(".available-rooms");
let managerDashboard = document.querySelector(".manager-dashboard");
let userName = document.querySelector(".user-name")

loginSubmitButton.addEventListener('click', loginUser);



function loginUser(e) {
  e.preventDefault()
  if (userName.value === 'manager') {
    manager = new Manager();
    domUpdates.displayManagerDashboard(login, managerDashboard);
  } else {
    let user = allData.users.find(user => `customer${user.id}` === userName.value)
    console.log(user)
    if (user) {
      currentGuest = new Guest(user);
      currentGuest.bookings = hotel.bookings.filter(booking => currentGuest.id === booking.userID)
      domUpdates.displayGuestDashboard(login, guestDashboard);
    }
  }

  function updateManagerDashboard() {

  }
  // invoke methods from classes and index in the correct order and at the correct time
}
