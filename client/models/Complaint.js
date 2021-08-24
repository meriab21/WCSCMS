const mongoose = require('mongoose');
//create complaint schema
const Schema = mongoose.Schema;
const ComplaintSchema = new Schema({
 date: Date,
 username: String,
 address: String,
 phone_no: Number,
 select: String,
 department: String,
 description: String,
},{collection: "complaint"});
const Complaint = mongoose.model('Complaint', ComplaintSchema)
module.exports = Complaint;
