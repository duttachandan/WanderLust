const express = require("express");
const Listing = require("../schemas/listing");
const router = express.Router();

// Routes Specific Middlewear
const middlwear = (req, res, next) => {
  console.log(req._parsedOriginalUrl.path);
  next();
};

router.use(middlwear);

router.get("/", async (req, res) => {
  const data = await Listing.find();
  res.render("./Listings/index.ejs", { data });
});

router.get("/:id", async (req, res) => {
  const data = await Listing.findById(req.params.id);
  res.render("./Listings/Product.ejs", { data });
});

module.exports = router;
