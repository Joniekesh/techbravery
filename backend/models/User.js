import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxLength: 30,
      uth,
    },
    lastname: {
      type: String,
      required: true,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 50,
    },
    country: {
      type: String,
      maxLength: 50,
    },
    password: {
      type: String,
      minLength: 6,
      maxLength: 100,
      required: true,
    },
    phone: {
      type: String,
    },
    // lastlogin: {
    //   type: Date,
    //   default: Date.now,
    // },
    role: {
      type: String,
      enum: ["User", "Admin", "SuperAdmin"],
      default: "User",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpire: {
      type: String,
    },

    lastloginDetails: {
      time: String,
      ip: String,
      os: String,
      location: String,
      timezone: String,
      language: String,
      browser: String,
      device: String,
      date: { type: Date, default: Date.now },
    },
  },
  { timestamps: true }
);

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);

  next();
});

export default mongoose.model("User", UserSchema);
