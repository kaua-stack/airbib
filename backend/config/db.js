import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("DEU CERTO AO BANCO");
  } catch (error) {
    console.log("NAO DEU CERTO!! DB", error);
  }
};
