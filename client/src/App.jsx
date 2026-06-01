import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <main className="section">
        <div className="form-grid">
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
      </main>
      {formData.slotId && (
        <form className="section" onSubmit={handleSubmit}>
          <input placeholder="Patient Name" required onChange={e => setFormData({...formData, name: e.target.value})} />
          <textarea placeholder="Appointment Reason" required onChange={e => setFormData({...formData, reason: e.target.value})} />
          <button className="primary" type="submit">Confirm</button>
        </form>
      )}
    </div>
  );
}
export default App;