
let login = document.querySelector(".login-page");
let managerDashboard = document.querySelector(".manager-dashboard");
let guestDashboard = document.querySelector(".guest-dashboard");

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
    let guestBookingHTML = document.querySelector('.guest-current-booking-info');
    let bookingList = currentUser.getAllBookings();
    bookingList.map(booking => {
      guestBookingHTML.innerHTML += `<section>${booking.date}</section>`;
    })
  },

  displayAvailableRooms: function(availableRooms) {
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
    });
    guestAvailableRooms.classList.remove('hidden');
  },

  renderCustomerAvailableDate: function(availableRooms, bookRoom) {
    this.displayAvailableRooms(availableRooms);
    let guestBookingButtons = document.querySelectorAll('.guest-booking-button');
    guestBookingButtons.forEach(button => {
      button.addEventListener('click', bookRoom);
    })
  },

  displayAllSpending: function(currentUser) {
    let guestSpendingInfoHTML = document.querySelector('.guest-spending-info');
    let totalSpending = currentUser.getAllSpending()
    guestSpendingInfoHTML.innerHTML = `All the lovely time with us has only cost you: $${Math.round(totalSpending)}`;
  },

   guestDashboardHandler: function(hotel, date, currentUser) {
    this.displayGuestDashboard(login, guestDashboard, currentUser);
    this.displayGuestBookings(hotel, date, currentUser);
    this.displayAllSpending(currentUser);
  }
}



export default domUpdates;
