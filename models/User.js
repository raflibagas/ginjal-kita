// models/User.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide a name"] },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide a phone number"],
    unique: true,
  },
  password: { type: String, required: [true, "Please provide a password"] },
  isVerified: { type: Boolean, default: false },
  profilePicture: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  riskAssessments: [
    { type: mongoose.Schema.Types.ObjectId, ref: "RiskAssessment" },
  ],
  dipstickRecords: [
    { type: mongoose.Schema.Types.ObjectId, ref: "DipstickRecord" },
  ],
  challenges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Challenge" }],
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare entered password with stored hash
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.models.User || mongoose.model("User", UserSchema);
