const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  artist: { type: String, required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true }
});

const Band = mongoose.model("Band", bandSchema);

module.exports = Band;
