/* eslint-disable */
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
 first_name: String,
 last_name: String,
 email: String,
 phone_no: Number,
 address: Number,
 gender: String,
 username: String,
 password: String
},{collection: "users"});
const User = mongoose.model('User', UserSchema)
module.exports = User;

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


   module.exports.getUserByEmail = (email, callback) => {
    const query = { email };
    User.findOne(query, callback);
   };
   
   module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcryptjs.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
    });
   };
   