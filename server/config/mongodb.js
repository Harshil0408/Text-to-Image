import mongoose from "mongoose";

const conncetDB = async () => {
  mongoose.connection.on("connected",
    () => {
      console.log("Database has been connected");
    });

  await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);
};

export default conncetDB
