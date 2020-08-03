// import getAllFetchedData from './API';
// import './css/base.scss';
// import Guest from './Guest';
// import Manager from './Manager';

const domUpdates = {

   displayManagerDashboard: function(login, managerDashboard) {
    login.classList.add('hidden');
    managerDashboard.classList.remove('hidden');
  },

   displayGuestDashboard: function(login, guestDashboard) {
    login.classList.add('hidden');
    guestDashboard.classList.remove('hidden');
  }

  // method to display rooms booked for the date from function on Manager.js (don't forget arguments and querySelectors)
}

// update DoM using data collected/manipulated in Classes


export default domUpdates;
