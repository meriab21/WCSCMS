/* eslint-disable */
const User = require('../models/User.js');
const Customer = require('../models/Customer.js');
const bcrypt = require('bcrypt');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'thisisthesecretkey';
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/users', (req, res) => {
  User.find({}, 'email username password', function (error, users) {
  if (error) { console.log(error); }
  res.send(users);
  })
})
//get a single user details
app.get('/user/:id', (req, res) => {
  User.findById(req.params.id, 'email username password', function (error, user) {
  if (error) { console.log(error); }
  res.send(user)
 })
})
 
     
 // add a new user
    app.post('/users/register', (req, res) => {
      const newUser = new User({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       email: req.body.email,
       phone_no: req.body.phone_no,
       address: req.body.address,
       gender: req.body.gender,
       username: req.body.username,
       password: req.body.password
    });
        newUser.save((error, user) => {
        if (error) { console.log(error); }
        res.send(user);


        });
    });
     // login a user
 app.post('/users/login', (req, res) => {
 if (req.body.email && req.body.password) {
 const email = req.body.email;
 const password = req.body.password;
 User.getUserByEmail(email, (err, user) => {
 if (!user) {
 res.status(404).json({ message: 'The user does not exist!' });
 } else {
 User.comparePassword(password, user.password, (error, isMatch) =>
{
 if (error) throw error;
 if (isMatch) {
 const payload = { id: user.id };
 const token = jwt.sign(payload, jwtOptions.secretOrKey);
 res.json({ message: 'ok', token });
 } else {
 res.status(401).json({ message: 'The password is incorrect!'
});
 }
 });
 }
 });
 }
 })

//login authenticated user
    // app.post('/users/login', (req, res) => {
    //   const user = Customer.find(user => user.username = req.body.username)
    //   if (user == null){
    //     return res.status(400).send('cannot find user')
    //   }
    //   try{
    //     if(await bcrypt.compare(req.body.password, user.password)){
    //       res.send('Success')
    //     }else
    //     res.send('Not Allowed')
    //   }catch{
    //     res.status(500).send()
    //   }
      
    // });
        
    

    // update a user
  app.put('/user/:id', (req, res) => {
    User.findById(req.params.id, 'username password', function (error, user) {
    if (error) { console.error(error); }
      user.email = req.body.email;
      user.username = req.body.username
      user.password = req.body.password
       user.save(function (error, user) {
    if (error) { console.log(error); }
       res.send(user)
    })
  })
})

// delete a user
app.delete('/user/:id', (req, res) => {
  User.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

