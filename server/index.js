const express = require('express');
const cors = require('cors');
const { SlotBookingRouter } = require('./routes/slot_booking.js');

const app = express();
app.use(cors()); 
app.use(express.json());

app.use('/api/slots', SlotBookingRouter);

app.listen(3000, () => console.log('Server running on port 3000'));