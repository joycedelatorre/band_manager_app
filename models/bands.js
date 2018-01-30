const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  name: { type: String, required: true },
  info: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Band = mongoose.model("Band", bandSchema);

module.exports = Band;
