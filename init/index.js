const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";
const Listing = require("../schemas/listing");
const data = require("./data");

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("successfully connected");
  })
  .catch((error) => {
    console.log(error);
  });

const initDb = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data.data);
};

initDb();
