
import getAllFetchedData from './API';
import './css/base.scss';
import Guest from './Guest';
import Manager from './Manager';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let overlookData;

getAllFetchedData().then(allData => {
  overlookData = allData;
  return allData;
})



// window.onload(getAllFetchedData());
let logInSubmitButton = document.querySelector(".login-submit-button");

logInSubmitButton.addEventListener('click', loginUser);

function loginUser() {
  if (userName === 'manager') {
    updataDom.displayManagerDashboard();
  // } else {
  //   // find user by id,
  //   displayGuestDashboard();
  }
}


console.log('This is the JavaScript entry file - your code begins here.');
