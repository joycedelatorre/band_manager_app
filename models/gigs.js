const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GigSchema = new Schema({
  name: { type: String},
  headline: {type: String},
  submission_url:{type:String},
  submission_ends:{type:String},
  submission_cost:{type:String},
  uid:{type:String}
});

const Gig = mongoose.model("Gig", GigSchema);

module.exports = Gig;