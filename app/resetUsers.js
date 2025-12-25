// app/resetUsers.js
const mongoose = require("mongoose");
const User = require("./lib/Models/User"); // correct path
const { connectDB } = require("./lib/mongoose"); // correct path

async function resetUsers() {
  try {
    await connectDB();

    // Delete all users (or only admins)
    await User.deleteMany({});
    // Or only admins: await User.deleteMany({ role: "admin" });

    console.log("✅ User database cleared!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error clearing users:", err);
    process.exit(1);
  }
}

resetUsers();
