
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
})

let dateToday = moment().format('YYYY/MM/DD');
let loginSubmitButton = document.querySelector(".login-submit-button");
let login = document.querySelector(".login-page");
let guestDashboard = document.querySelector(".guest-dashboard");
let availableRooms = document.querySelector(".available-rooms");
let managerDashboard = document.querySelector(".manager-dashboard");
let userName = document.querySelector(".user-name")
let guestDateInput = document.querySelector('#guest-date-input');
let guestDatesButton = document.querySelector(".guest-dates-button");

loginSubmitButton.addEventListener('click', loginUser);


guestDatesButton.addEventListener('click', findGuestBooking);

// create loginHander onclick if manager, displaymanagerDashboard, displayAvailableRooms, displayT

function loginUser(e) {
  e.preventDefault()
  if (userName.value === 'manager') {
    manager = new Manager();
    domUpdates.managerDashboardHandler(hotel, dateToday)
  } else {
    let user = allData.users.find(user => `customer${user.id}` === userName.value)
    if (user) {
      currentGuest = new Guest(user, allData);
      domUpdates.guestDashboardHandler(hotel, dateToday, currentGuest);
    }
  }
  // invoke methods from classes and index in the correct order and at the correct time
}

function findGuestBooking() {
  let dateInput = guestDateInput.value;
  let date = dateInput.split('-').join('/');
  let availableRooms = hotel.findAvailableRooms(date);
  renderCustomerAvailableDate(availableRooms)

}
function renderCustomerAvailableDate(availableRooms) {
  let guestAvailableRooms = document.querySelector('.guest-available-rooms');
  guestAvailableRooms.innerHTML = '';
  availableRooms.map(room => {
    guestAvailableRooms.innerHTML += `<section>
    <p>${room.roomType}</p>
    <p>${room.bedSize}</p>
    <p>${room.numBeds}</p>
    <p>${room.number}</p>
    <button class="guest-booking-button" value=${room.number} type=button>Book room</button>
    </section>`
  })
}
