
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
    <p>Room:${room.roomType}</p>
    <p>BedSize:${room.bedSize}</p>
    <p>Number of Beds${room.numBeds}</p>
    <p>Room Number${room.number}</p>
    <button class="guest-booking-button" value=${room.number} type=button>Book room</button>
    </section>`
  })
  let guestBookingButtons = document.querySelectorAll('.guest-booking-button');
  guestBookingButtons.forEach(button => {
    button.addEventListener('click', bookRoom);
  })
}


function bookRoom(event) {
  event.preventDefault();
  if (event.target.classList.contains('guest-booking-button')) {
    let date = guestDateInput.value;
    let postDate = date.split('-').join('/');
    let selectedRoomNumber = event.target.value;
    let currentGuestID = currentGuest.id;
    postGuestBooking(postDate, selectedRoomNumber, currentGuestID);
  }
}

  function postGuestBooking(postDate, selectedRoomNumber, currentGuestID) {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       userID: Number(currentGuestID),
       date: postDate,
       roomNumber: Number(selectedRoomNumber)
     })
   })
   .then(response => response.json())
   .then(data => console.log('guestpost data', data))
   .catch(error => console.error('guestPost error', error))
  }
