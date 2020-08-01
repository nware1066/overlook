
import getAllFetchedData from './API';
import './css/base.scss';
import Guest from './Guest';
import Manager from './Manager';
import './images/turing-logo.png'

console.log(getAllFetchedData)

window.onload(getAllFetchedData());
//
// logInSubmitButton.addEventListener('click', loginUser);
//
// function loginUser() {
//   const logInSubmitButton = document.querySelector(.log-in-submit-button);
//   if (userName === manager) {
//     displayManagerDashboard();
//   } else {
//     // find user by id,
//     displayGuestDashboard();
//   }
// }

// An example of how you tell webpack to use an image (also need to link to it in the index.html)

console.log('This is the JavaScript entry file - your code begins here.');
