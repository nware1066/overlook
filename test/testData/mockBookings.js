
const moment = require('moment');
let today = moment().format('YYY/MM/DD');
console.log('today', today);

const mockBookings = [
    {
     userID: 1,
     date: today,
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
   }
 ];

export default mockBookings;
