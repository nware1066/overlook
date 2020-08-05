
let login = document.querySelector(".login-page");
let managerDashboard = document.querySelector(".manager-dashboard");
let guestDashboard = document.querySelector(".guest-dashboard");
let guestDatesButton = document.querySelector(".guest-dates-button");

// guestDatesButton.addEventListener('click', findGuestBooking);

const domUpdates = {

   displayManagerDashboard: function() {
    login.classList.add('hidden');
    managerDashboard.classList.remove('hidden');
  },

  updateTotalAvailableRooms: function(hotel, date) {
    const availableRoomsHTML = document.querySelector(".available-rooms");
    const total = hotel.totalAvailableRooms(date);
    availableRoomsHTML.innerHTML = `Total available rooms: ${total}`;
  },

  updateDailyRevenue: function(hotel, date) {
    let dailyRevenueHTML = document.querySelector(".daily-revenue");
    let dailyRevenue = hotel.findDailyRevenue(date);
    dailyRevenueHTML.innerHTML = `The revenue for today is $${dailyRevenue}`
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
  },

  displayGuestDashboard: function() {
    login.classList.add('hidden');
    guestDashboard.classList.remove('hidden');
  },

  displayGuestBookings: function(hotel, date, currentUser) {
    let guestBookingHTML = document.querySelector('.guest-booking-info');
    let bookingList = currentUser.getAllBookings()
    guestBookingHTML.innerHTML = `Your bookings with Overlook Hotel: ${this.renderBookingDates(bookingList)}`;
  },

  renderBookingDates: function(bookingList) {
    return bookingList.map(booking => {
      return `<p>${booking.date}</p>`
    })
  },

  // findGuestBooking: function() {
  //   let guestDateInput = document.querySelector('#guest-date-input').value;
  //   console.log(guestDateInput);
  // },

  displayAllSpending: function(currentUser) {
    let guestSpendingInfoHTML = document.querySelector('.guest-spending-info');
    let totalSpending = currentUser.getAllSpending()
    guestSpendingInfoHTML.innerHTML = `All the lovely time with us has only cost you: $${Math.round(totalSpending)}`;
  },

   guestDashboardHandler: function(hotel, date, currentUser) {
     console.log(currentUser)
    this.displayGuestDashboard(login, guestDashboard, currentUser);
    this.displayGuestBookings(hotel, date, currentUser);
    this.displayAllSpending(currentUser);
  }
  // method to display rooms booked for the date from function on Manager.js (don't forget arguments and querySelectors)
}

// update DoM using data collected/manipulated in Classes


export default domUpdates;
