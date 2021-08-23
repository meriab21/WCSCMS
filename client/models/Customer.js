/* eslint-disable */
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
 first_name: String,
 last_name: String,
 email: String,
 phone_no: Number,
 address: Number,
 gender: String,
 username: String,
 password: String
},{collection: "customer"});
const Customer = mongoose.model('Customer', CustomerSchema)
module.exports = Customer;

//hashing password
module.exports.createUser = (newUser, callback) => {
    bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(newUser.password, salt, (error, hash) => {
    // store the hashed password
    const newUserResource = newUser;
    newUserResource.password = hash;
    newUserResource.save(callback);
    });
    });
   };