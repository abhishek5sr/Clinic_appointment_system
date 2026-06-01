
const { Slot } = require('./db.js'); 

const data = [
  { date: '2026-06-02', time: '09:00 AM' },
  { date: '2026-06-02', time: '10:00 AM' },
  { date: '2026-06-02', time: '11:00 AM' }
];

async function seed() {
  try {
    await Slot.deleteMany({});
    await Slot.insertMany(data);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit();
  }
}

seed();