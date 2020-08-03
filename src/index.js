
import getAllFetchedData from './API';
import './css/base.scss';
import Guest from './Guest';
import Manager from './Manager';
// import updateDom from './updateDom'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let hotelData;

getAllFetchedData()
  .then(allData => {
    hotelData = allData;
    console.log(hotelData)
  });

let loginSubmitButton = document.querySelector(".login-submit-button");
let login = document.querySelector(".login-page");
let guestDashboard = document.querySelector(".guest-dashboard");
let managerDashboard = document.querySelector(".manager-dashboard");
let userName = document.querySelector(".user-name")

loginSubmitButton.addEventListener('click', loginUser);

function loginUser(e) {
  e.preventDefault()
  if (userName.value === 'manager') {
    displayManagerDashboard();
  } else {
    console.log(hotelData.users)
    let user = hotelData.users.find(user => user.name === userName.value)
    console.log("a", userName.value)
    if (user) {
      displayGuestDashboard();
    }
  }
}

function displayManagerDashboard() {
  login.classList.add('hidden');
  managerDashboard.classList.remove('hidden');
}

function displayGuestDashboard() {
  login.classList.add('hidden');
  guestDashboard.classList.remove('hidden');
}
