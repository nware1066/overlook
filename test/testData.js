const guests = {
  guests: [
    {
      id: 1,
      name: "Malcolm Reyolds"
    },
    {
      id: 2,
      name: "Zoe Washburn"
    },
    {
      id: 3,
      name: "Hoban Washburn"
    },
    {
      id: 4,
      name: "Kaylee Frye"
    }
  ]
};
const rooms = {
  rooms: [
    {
      number: 73,
      roomType: "single room",
      bidet: false,
      bedSize: "twin",
      numBeds: 2,
      costPerNight: 289.32
    },
    {
      number: 8,
      roomType: "junior suite",
      bidet: true,
      bedSize: "king",
      numBeds: 1,
      costPerNight: 398.47
    },
    {
      number: 3,
      roomType: "junior suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 378.47
    },
    {
      number: 150,
      roomType: "junior suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 378.47
    },
  ]
};
const bookings = {
  bookings: [
    {
     userID: 1,
     date: "22/02/2020",
     roomNumber: 73
   },
   {
     userID: 1,
     date: "31/08/2019",
     roomNumber: 8
   },
   {
      userID: 2,
      date: "18/07/2019",
      roomNumber: 123
    },
    {
      userID: 3,
      date: "17/11/2019",
      roomNumber: 99
    },
    {
     userID: 4,
     date: "16/07/2019",
     roomNumber: 169
   },
   {
     userID: 7,
     date: "29/09/2019",
     roomNumber: 50
   },
   {
     userID: 48,
     date: "06/11/2019",
     roomNumber: 150
   },
   {
     userID: 67,
     date: "03/10/2019",
     roomNumber: 3
   },
  ]
}
export { guests, rooms, bookings };
