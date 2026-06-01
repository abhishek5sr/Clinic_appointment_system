Medical Appointment Scheduling System
A lightweight, responsive appointment booking application designed for medical clinics. This system allows patients to view available one-hour time slots, select a preferred time, and submit booking details with built-in concurrency control.

 Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

 Project Structure
Plaintext
Client_appointment_system
├── client/              # React frontend
│   └── src/
│       └── app.jsx
├── server/              # Node.js backend
│   ├── mongo/
│   │   ├── db.js        # Database connection logic
│   │   └── seed.js      # Script to seed initial time slots
│   ├── routes/
│   │   └── slot_booking.js
│   └── index.js         # API entry point
└── .env                 # Environment variables
🚀 Setup Instructions
Follow these steps to get the project running locally:

1. Environment Configuration
Create a .env file in the root directory and add your MongoDB connection string:

Code snippet
MONGO_URI=your_mongodb_connection_string_here
PORT=3000
2. Database Seeding
Navigate to the server/mongo directory and run the seed script to initialize the available time slots:

Bash
cd server/mongo
node seed.js
3. Backend Setup
Return to the server directory and start the API server:

Bash
cd ../
node index.js
The backend will be running on http://localhost:3000.

4. Frontend Setup
In a new terminal, navigate to the client directory and start the development server:

Bash
cd client
npm install
npm run dev
⚙️ How It Works
Data Initialization: The database is pre-seeded with a fixed set of one-hour slots using seed.js.

API Integration: The frontend uses Axios to fetch available slots from the backend via a GET request.

Concurrency Control: The backend implements strict validation logic to ensure that once a slot is booked, it is marked as unavailable, preventing double-bookings even if multiple requests arrive simultaneously.

User Interface: The responsive React interface dynamically displays available slots, allowing users to input patient details and their reason for the visit.

 Features -
Fixed Scheduling: Displays clear, one-hour blocks for efficient clinic management.

Input Validation: Ensures all required patient fields are filled before submitting a booking.

Responsive Design: Optimized for both desktop and mobile viewports.

Data Integrity: Reliable backend logic to handle booking conflicts.
