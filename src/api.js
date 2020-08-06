
import Guest from './Guest';

function fetchUsers() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.log("fetch user error"));
  }

  function fetchRooms() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => console.log("fetch rooms error"))
  }

   function fetchBookings() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(error => console.log("fetch bookings error"))
  }

   function getAllFetchedData() {
    return Promise.all([fetchUsers(), fetchRooms(), fetchBookings()])
    .then(response => {
      let allData = {};
      allData.users = response[0]
      allData.rooms = response[1];
      allData.bookings = response[2];
      return allData;
    })
    .catch(error => console.log("allData error"))
  }

// refactor to instantiate classes on fetch (could not make it work within time)

export default getAllFetchedData;
