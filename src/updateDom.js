import getAllFetchedData from './API';
import './css/base.scss';
import Guest from './Guest';
import Manager from './Manager';

const mainPage = document.querySelector(".main-page");
console.log(mainPage);

function displayManagerDashboard() {
  document.main.innerHTML = "";
  document.main.innerHTML = `
  <section class="manager-info">
    <p class="available-rooms">There are currently ## available rooms<p>
    <p class="daily-revenue">The revenue for today is ##</p>
    <p class="occupancy-percentage">## percent of total rooms are currently occupied</p>
  </section>
  <section class="manager-search-section">
    <label for="client-search">Search</label>
    <input id="client-search" type="text" placeholder="Client Name" required />
  </section>
  `;
}
