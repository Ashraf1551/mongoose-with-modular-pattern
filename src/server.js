import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";


const main = async () => {
  try {
    await mongoose.connect(config.DB_URL);
    console.log("Database connected");
    app.listen(config.PORT, () => {
      console.log(`Example app listening on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
