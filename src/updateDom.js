// import getAllFetchedData from './API';
// import './css/base.scss';
// import Guest from './Guest';
// import Manager from './Manager';
let login = document.querySelector(".login-page");
let managerDashboard = document.querySelector(".manager-dashboard");
let guestDashboard = document.querySelector(".guest-dashboard");

const domUpdates = {

   displayManagerDashboard: function() {
    login.classList.add('hidden');
    managerDashboard.classList.remove('hidden');
  },

   displayGuestDashboard: function() {
    login.classList.add('hidden');
    guestDashboard.classList.remove('hidden');
  },

  displayAllAvailableRooms: function(total) {
    let availableRooms = document.querySelector(".available-rooms");
    availableRooms.innerHTML = `Total available rooms: ${total}`;
  },

  updateManagerDashboard: function(hotel, date) {
      const total = hotel.totalAvailableRooms(date)
      domUpdates.displayAllAvailableRooms(total);
  }
  // method to display rooms booked for the date from function on Manager.js (don't forget arguments and querySelectors)
}

// update DoM using data collected/manipulated in Classes


export default domUpdates;
