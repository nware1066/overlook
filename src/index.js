
import getAllFetchedData from './API';
import './css/base.scss';
import Guest from './Guest';
import Manager from './Manager';
// import updateDom from './updateDom'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let overlookData;

getAllFetchedData().then(allData => {
  overlookData = allData;
  return allData;
});



// window.onload(getAllFetchedData());
let loginSubmitButton = document.querySelector(".login-submit-button");
let login = document.querySelector(".login-page");
let guestDashboard = document.querySelector(".guest-dashboard");
let managerDashboard = document.querySelector(".manager-dashboard");
let userName = document.querySelector(".user-name")

loginSubmitButton.addEventListener('click', loginUser);

// console.log('hello')

function loginUser(e) {
  e.preventDefault()
  console.log(userName.value)
  if (userName.value === 'manager') {
    console.log('a', userName.value)
    displayManagerDashboard();
  } else {
    let currentGuest = new Guest(guestData)
    if (userName.value === currentGuest.name) {
      displayGuestDashboard();
    }
  //   displayGuestDashboard();
  // }
  }
}

function displayManagerDashboard() {
  login.classList.add('hidden');
  managerDashboard.classList.remove('hidden');
}

console.log('This is the JavaScript entry file - your code begins here.');
