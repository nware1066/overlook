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

  updateTotalAvailableRooms: function(hotel, date) {
    const availableRoomsHTML = document.querySelector(".available-rooms");
    const total = hotel.totalAvailableRooms(date);
    availableRoomsHTML.innerHTML = `Total available rooms: ${total}`;
  },

  updateDailyRevenue: function(hotel, date) {
    let dailyRevenueHTML = document.querySelector(".daily-revenue");
    let dailyRevenue = hotel.findDailyRevenue(date);
    dailyRevenueHTML.innerHTML = `The revenue for today is ${dailyRevenue}`
  },

  updatePercentageTotalRooms: function(hotel, date) {
    let occupancyPercentageHTML = document.querySelector(".occupancy-percentage");
    let occupancyPercentage = hotel.findOccupancyByPercent(date);
    occupancyPercentageHTML.innerHTML = `${occupancyPercentage} percent of total rooms are currently occupied`
  },

  managerDashboardHandler: function(hotel, date) {
    this.displayManagerDashboard(login, managerDashboard);
    this.updateTotalAvailableRooms(hotel, date);
    this.updateDailyRevenue(hotel, date);
    this.updatePercentageTotalRooms(hotel, date);
  }
  // method to display rooms booked for the date from function on Manager.js (don't forget arguments and querySelectors)
}

// update DoM using data collected/manipulated in Classes


export default domUpdates;
