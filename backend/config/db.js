import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error);
  }
};
