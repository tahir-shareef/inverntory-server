const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const data = [
  {
    orderID: '#7676',
    date: '06/30/2022',
    customer: 'Ramesh Chaudhary',
    salesChannel: 'Ramesh',
    destination: 'Lalitpur',
    items: 3,
    status: 'Completed'
  },
  {
    orderID: '#7677',
    date: '07/01/2022',
    customer: 'Sara Johnson',
    salesChannel: 'Online',
    destination: 'Kathmandu',
    items: 5,
    status: 'Pending'
  },
  {
    orderID: '#7678',
    date: '07/02/2022',
    customer: 'John Smith',
    salesChannel: 'Pokhara',
    destination: 'Pokhara',
    items: 2,
    status: 'Completed'
  },
  {
    orderID: '#7679',
    date: '07/03/2022',
    customer: 'Emma Thompson',
    salesChannel: 'Biratnagar',
    destination: 'Biratnagar',
    items: 4,
    status: 'Pending'
  },
  {
    orderID: '#7680',
    date: '07/04/2022',
    customer: 'Adam Wilson',
    salesChannel: 'Wilson',
    destination: 'Butwal',
    items: 1,
    status: 'Completed'
  }
];

app.get('/api/orders', (req, res) => {
    res.json(data);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
