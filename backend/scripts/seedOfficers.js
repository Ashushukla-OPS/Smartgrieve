const mongoose = require("mongoose");
const User = require("../models/user.model");
const Department = require("../models/department.model");
const { dummyOfficers } = require("../constants/officers");
const bcrypt = require("bcrypt");
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

    await User.deleteMany({ role: "officer" });
    console.log("Cleared existing officers");

    const hashedOfficers = await Promise.all(
      dummyOfficers.map(async (officer, index) => {
        const hashedPassword = await bcrypt.hash(officer.password, 10);

        return {
          name: officer.name,
          email: officer.email,
          password: hashedPassword,
          role: "officer",
          department: officer.department,
          phone: officer.mobileNo,
          city: "Bhopal",
          employeeId: `OFF-${officer.department}-${index + 1}`,
        };
      })
    );

    const createdOfficers = await User.insertMany(hashedOfficers);
    console.log(`Seeded ${createdOfficers.length} new officers`);

    await Department.updateMany({}, { $set: { officers: [] } });

    for (const officer of createdOfficers) {
      await Department.findOneAndUpdate(
        { code: officer.department },
        { $push: { officers: officer._id } }
      );
    }

    console.log("Updated department officer lists");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seed();