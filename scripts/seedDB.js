const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_zpkq2bsg:o8ie7sprnqgsv3ciktdonkisol@ds121898.mlab.com:21898/heroku_zpkq2bsg",
  {
    useMongoClient: true
  }
);

const bandSeed = [
  {
    name: "Band 1",
    info: "Info for Band 1",
    date: new Date(Date.now())
  },
  {
    name: "Band 2",
    info: "Info for Band 2",
    date: new Date(Date.now())
  },
  {
    name: "Band 3",
    info: "Info for Band 3",
    date: new Date(Date.now())
  }
];

db.Band
  .remove({})
  .then(() => db.Band.collection.insertMany(bandSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});
