const express = require('express');
const { Slot, Patient } = require('../mongo/db.js');
const router = express.Router();


router.get('/', async (req, res) => {
  const slots = await Slot.find().populate('patient');
  res.json(slots);
});

router.post('/book', async (req, res) => {
  const { slotId, patientName, reason } = req.body;

  try {
    const newPatient = await Patient.create({ name: patientName, reason });


    const updatedSlot = await Slot.findOneAndUpdate(
      { _id: slotId, patient: null }, 
      { $set: { patient: newPatient._id } },
      { new: true }
    );

    if (!updatedSlot) {
      await Patient.findByIdAndDelete(newPatient._id);
      return res.status(409).json({ message: "Slot already taken" });
    }

    res.status(200).json({ message: "Booking successful", slot: updatedSlot });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { SlotBookingRouter: router };