import mongoose from "mongoose";

let isConnected = false;

export const database = async () => {
     mongoose.set('strictQuery', true);
     if(isConnected) {
          console.log("Database is Already Connected")
          return;
     }

     try {
          await mongoose.connect(process.env.DBURL, {
               dbName: "share_prompt",
               useNewUrlParser: true,
               useUnifiedTopology: true,
          })
          isConnected = true;
          console.log("Database Engaged")
     } catch (error) {
          console.log(error)
     }

}
