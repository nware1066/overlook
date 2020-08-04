
import getAllFetchedData from './API';
import './css/base.scss';
import Guest from './Guest';
import Manager from './Manager';
import Room from './Room';
import Booking from './Booking';
import domUpdates from './updateDom';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// let hotelData;

getAllFetchedData()
  .then(hotelData => {
    return new Manager(hotelData);
  })
  .then(manager => console.log(manager) )



let loginSubmitButton = document.querySelector(".login-submit-button");
let login = document.querySelector(".login-page");
let guestDashboard = document.querySelector(".guest-dashboard");
let managerDashboard = document.querySelector(".manager-dashboard");
let userName = document.querySelector(".user-name")

loginSubmitButton.addEventListener('click', loginUser);

function loginUser(e) {
  e.preventDefault()
  if (userName.value === 'manager') {
    domUpdates.displayManagerDashboard(login, managerDashboard);
  } else {
    let user = hotelData.users.find(user => `customer${user.id}` === userName.value)
    if (user) {
      domUpdates.displayGuestDashboard(login, guestDashboard);
    }
  }

  // invoke methods from classes and index in the correct order and at the correct time
}
