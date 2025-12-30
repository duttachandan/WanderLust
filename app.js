const express = require("express");
const Router = express.Router();
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8000;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";
// const Listing = require("./schemas/listing");
const router = require("./routes/listing");

app.set("view engine", "ejs");
app.set(path.join(__dirname, "views"));

// middlewears
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/listing", router);

Router.get("/addlisting", (req, res) => {
  res.render("./Lisings/additems.ejs");
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Mongo Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// Custom Middlewears
app.use((req, res, next) => {
  // console.log("middlewears called");
  next();
});

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.get("/", (req, res) => {
  res.send("Connected Succesfully");
});

// app.get("/listing", async (req, res) => {
//   res.render("index.ejs", {});
//   const data = await Listing.find();
//   res.render("./Landing/index.ejs", { data });
// });

// app.get("/listing/:id", async (req, res) => {
//   const data = await Listing.findById(req.params.id);
//   console.log(data);
//   res.render("./SingleProduct/Product.ejs", { data });
// });

// app.get("/listing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "Kalimpong Home",
//     description: "4BHK view near Kolakham",
//     price: 3000,
//     location: "Kolakham",
//     country: "Kalimpong",
//   });
//   await sampleListing.save();
//   console.log("Sample Saved");
//   res.send("Successfully Saved");
// });

app.listen(port, () => {
  console.log(`Our Server is running on  http://localhost:8000/`);
});
