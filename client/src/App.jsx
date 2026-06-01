import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const api = axios.create({ baseURL: 'http://localhost:3000' });

function App() {
  const [slots, setSlots] = useState([]);
  const [formData, setFormData] = useState({ slotId: null, name: '', reason: '' });

  const fetchSlots = async () => {
    const res = await api.get('/api/slots');
    setSlots(res.data);
  };

  useEffect(() => { fetchSlots(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/slots/book', { 
        slotId: formData.slotId, 
        patientName: formData.name, 
        reason: formData.reason 
      });
      alert("Booking successful!");
      setFormData({ slotId: null, name: '', reason: '' });
      fetchSlots(); // Refresh list immediately
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Medical Clinic</h1>
      </header>
      <div className="Main-Container">
       <div className="info-panel">
          <p>Welcome to Medical Clinic Booking System. Use this portal to find available appointment slots. Click on a time to book.</p>
        </div>

        {/* Slot Selector */}
        <div className="slot-selector">
          <h3>Select an Available Time</h3>
          <div className="slots-grid">
          {slots.map(slot => (
            <button 
              key={slot._id} 
              className={slot.patient ? "secondary" : "primary"}
              disabled={!!slot.patient} 
              onClick={() => setFormData({...formData, slotId: slot._id})}
            >
              {slot.time} {slot.patient ? "(Booked)" : "(Available)"}
            </button>
          ))}
        </div>
        </div>
     
      <form className="booking-form" onSubmit={handleSubmit}>
          <h3>Complete Your Booking</h3>
          <input placeholder="Patient Name" required onChange={e => setFormData({...formData, name: e.target.value})} />
          <textarea placeholder="Appointment Reason" required onChange={e => setFormData({...formData, reason: e.target.value})}></textarea>
          <p>Slot Selected: {formData.slotId ? slots.find(s => s._id === formData.slotId)?.time : "None"}</p>
          <button className="primary" type="submit">Confirm Appointment</button>
        </form>
    </div>
     </div>
  );
}
export default App;