const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI =
  "mongodb+srv://nilkamalgilbile:g7hiTJVeIvr0OzcT@cluster1.0brl6u0.mongodb.net/?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(
      MONGOURI,
      {
        dbName: "dbUserReg",
      },
      {
        useNewUrlParser: true,
      }
    );
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
