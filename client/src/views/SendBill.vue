<template>
<v-app>
    <v-container>
         <v-row justify="space-around">
      <v-card width="700px" >
        <v-img
          height="400px"
          src="../assets/images/11.png"
        >      </v-img>
        <v-spacer></v-spacer>
      <v-col cols="6">
    <v-text-field
      v-model="date"
      label="Date"
      class="purple-input"
      type="Date"/>
                </v-col>

    <v-text-field
     v-model="username"
      :rules="[v => !!v || ' Username is required']"
      label="Username"
      required
    ></v-text-field>
     <v-text-field
     v-model="service_charge"
      :rules="[v => !!v || ' Service_charge is required']"
      label="Service_charge"
      required
    ></v-text-field>
    <v-col cols="6">
     <v-text-field
     v-model="payment_date"
      :rules="[v => !!v || ' Payment_date is required']"
      label="Payment_date"
      type="Date"
      required

    ></v-text-field></v-col>
    <v-btn 
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="send"
    > Send  
    </v-btn>

      </v-card>
         </v-row>
    </v-container>
</v-app>  
</template>

<script>

import axios from "axios";
export default {
  
    data() {
      
        return {
            
            dialog: false,
            drawer: false,
            
             valid: true,
      date: '',
      username:'',
      service_charge: '',
      payment_date: '',
    }
    },
    methods: {
      send(){
        let newBill ={
          date: this.date,
          username: this.username,
          service_charge: this.service_charge,
          payment_date: this.payment_date,
          
        }; 
      axios
        .post("http://localhost:3000/bills", newBill)
        .then(() => {
          this.$router.push({ path: "/CustomerService" });
          this.$refs.form.reset();


          this.get('/bils', (req,res)=>{
            res.render('/')
          })
          
        })
        .catch((err) => {
          console.log(err);
        });
      //} // VALIDATION END
      return true;
    },
    },
       }
</script>