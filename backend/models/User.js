import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxLength: 30,
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
    lastlogin: {
      type: Date,
      default: Date.now,
    },
    role: {
      type: String,
      enum: ["User", "Admin", "SuperAdmin"],
      default: "User",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hashSync(this.password, salt);
});
export default mongoose.model("User", UserSchema);
