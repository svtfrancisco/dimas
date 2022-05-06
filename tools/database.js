import mongoose from "mongoose";

let connected = false;
export async function dbConnect() {
  if (!connected) {
    try {
      mongoose.connect(process.env.DB_URI, {
        authSource: "admin",
        user: "admin",
        pass: "pass",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      connected = true;
    } catch (e) {
      console.log(e);
    }
  }
}

dbConnect();
