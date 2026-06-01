> Defining task project
---------to build a lightweight appointment scheduling system for a medical clinic that allows patients to view available appointment slots, select a preferred time, and complete a booking request.


> Requirements :
  > interface should display a fixed set of one-hour appointment slots for a single day
  > user to be able to clearly identify which slots are available
  > pateint details and appointment reason

> Objectives :
   >frontend responsivnes
   >backend api 
   >validation handling
   >The backend must guarentee that no two patients can successfully book the same time slot


>File Structure:
Client_appointment_system
|
------client (frontend)
|       |
|       |-------src
|               |-app.jsx
|
|------server
|        |
|        |-----mongo
|        |        |---db.js
|        |        |---seed.js
|        |
|        -----index.js
|        |
|        |----routes
|              |---slot_booking.js
|         
|---------.env



>Tech stack used:
   >backend > Nodejs
   >database > Mongodb
   >frontend > Reactjs


> setup instructions 
      1. create  .env file in root folder , add your  mongodb connection  string 
      2. run   (node seed.js) in respective folder cli {for seeding the db with time slots )
      3. run   (node index.js ) in the server dir cli {the backend runs on port 3000} , the connection with the DB is established
      4. run   (npm run dev ) in the client dir cli



> working
    >Connecting Database to the backend through Method using express 
    >The GET api gets the pre seeded data slots (database seeded through seed.js )
    > uses axios lib to fetch and populate the ui with available time slots


    


