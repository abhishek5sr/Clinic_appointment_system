const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const MONGODB_URI = process.env.MONGODB_URL;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(" connected to MongoDB."))
  .catch((err) => console.error(" connection error:", err));

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reason: { type: String, required: true }
});

const SlotSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", default: null },
});


SlotSchema.index({ date: 1, time: 1 }, { unique: true });

module.exports = {
  Patient: mongoose.model("Patient", PatientSchema),
  Slot: mongoose.model("Slot", SlotSchema),
};