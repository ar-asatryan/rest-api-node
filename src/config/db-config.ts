import mongoose from 'mongoose';
import 'dotenv/config';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_PATH}`, {
      useNewUrlParser: true,
    });
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log("Error message:", error.message);
    process.exit(1);
  }
};
