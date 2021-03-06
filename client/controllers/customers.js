const Customer = require('../models/Customer.js');
//const router = express.Router();
module.exports.controller = function (app)  {
 // get all users
 app.get('/customers', (req, res) => {
  Customer.find({}, 'first_name last_name bp_number email phone_no address gender username password ', function (error, customers) {
  if (error) { console.log(error); }
  res.send(customers);
  })
})

//get a single user details
app.get('/customer/:id', (req, res) => {
  Customer.findById(req.params.id, 'first_name last_name bp_number email phone_no address gender username password', function (error, customer) {
  if (error) { console.log(error); }
  res.send(customer)
 })
})
    
 // add a new user
    app.post('/customers', async (req, res) => {
      const newCustomer = new Customer({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      bp_number: req.body.bp_number,
      email: req.body.email,
      phone_no: req.body.phone_no,
      address: req.body.address,
      gender: req.body.gender,
      username: req.body.username, 
      password: req.body.password 

    });
        newCustomer.save((error, customer) => {
        if (error) { console.log(error); }
        res.send(customer);
        });
    });

     // update a user
  app.put('/customer/:id', (req, res) => {
    Customer.findById(req.params.id, 'first_name last_name bp_number email phone_no address gender username password', function (error, customer) {
    if (error) { console.error(error); }
      customer.first_name=req.body.first_name
      customer.last_name= req.body.last_name
      customer.bp_number= req.body.bp_number
      customer.email= req.body.email
      customer.phone_no= req.body.phone_no
      customer.address= req.body.address
      customer.gender=req.body.gender
      customer.username= req.body.username
      customer.password= req.body.password

       customer.save(function (error, customer) {
    if (error) { console.log(error); }
       res.send(customer)
    })
  })
})

// delete a user
app.delete('/customer/:id', (req, res) => {
  Customer.remove({
    _id: req.params.id
    }, function(error){
   if (error) { console.error(error); }
      res.send({ success: true })
   })
})

  };

