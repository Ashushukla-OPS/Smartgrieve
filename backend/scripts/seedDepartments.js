const mongoose = require("mongoose");
const Department = require("../models/department.model");
const { DEPARTMENTS } = require("../constants/departments");
require("dotenv").config();

const mongoUri =
  process.env.MONGODB_URI ||
  process.env.MONGO_URI ||
  process.env.MONGO_URL ||
  process.env.DB_URL ||
  process.env.DATABASE_URL;

const seed = async () => {
  try {
    if (!mongoUri) {
      console.log("MongoDB URI not found. Check your .env variable name.");
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to DB");

    await Department.deleteMany({});
    console.log("Cleared existing departments");

    const docs = Object.values(DEPARTMENTS);
    await Department.insertMany(docs);

    console.log("Seeded departments:");
    docs.forEach((d) => console.log(`${d.code} - ${d.name}`));

    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seed();