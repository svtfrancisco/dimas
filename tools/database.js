import mongoose from "mongoose";

let connected = false;
export async function dbConnect() {
  if (!connected) {
    try {
      if (process.env.DB_URI.includes("mongodb+srv")) {
        mongoose.connect(process.env.DB_URI);
      } else {
        mongoose.connect(process.env.DB_URI, {
          authSource: "admin",
          user: "admin",
          pass: "pass",
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
      }
      connected = true;
    } catch (e) {
      console.log(e);
    }
  }
}

dbConnect();
