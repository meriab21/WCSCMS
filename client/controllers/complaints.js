/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const Complaint = require('../models/Complaint.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all complaints
 app.get('/complaints', (req, res) => {
  Complaint.find({}, 'date username address phone_no complaint department', function (error, users) {
  if (error) { console.log(error); }
  res.send(users);
  })
})
//get a single complaints details
app.get('/complaints/:id', (req, res) => {
  Complaint.findById(req.params.id, 'date username address phone_no complaint department', function (error, user) {
  if (error) { console.log(error); }
  res.send(user)
 })
})
 
     
 // add a new user
    app.post('/complaints', (req, res) => {
      const newComplaint = new Complaint({
      date: req.body.date,
      username: req.body.username,
      address: req.body.address,
      phone_no: req.body.phone_no,
      complaint: req.body.complaint,
      department: req.body.department
    });
        newComplaint.save((error, complaint) => {
        if (error) { console.log(error); }
        res.send(complaint);
        });
    });
    
// update a user
app.put('/complaints/:id', (req, res) => {
  Complaint.findById(req.params.id, 'date username address phone_no complaint depaerment', function (error) {
  if (error) { console.error(error);}
    complaint.date=req.body.date
    complaint.username= req.body.username
    complaint.address= req.body.address
    complaint.phone_no=req.body.phone_no
    complaint.complaint=req.body.complaint
    complaint.department= req.body.department})
     complaint.save(function (error,complaint) {
  if (error) { console.log(error); }
     res.send(complaint)
  })
})

// delete a user
app.delete('/complaints/:id', (req, res) => {
Complaint.remove({
  _id: req.params.id
  }, function(error){
 if (error) { console.error(error); }
    res.send({ success: true })
 })
})
};
  

