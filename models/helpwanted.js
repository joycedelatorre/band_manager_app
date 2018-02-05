const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HelpWantedSchema = new Schema({
  artist: { type: String, required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true }
});

const HelpWanted = mongoose.model("HelpWanted", HelpWantedSchema);

module.exports = HelpWanted;
