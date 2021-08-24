<template>
  <v-container>
      <form>
       <div>
        <v-toolbar color="indigo"  text="Edit Customers">
          <v-spacer></v-spacer>
          <v-btn icon color="white" route to="/Customers">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-toolbar>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon color="white" route to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      
          <v-card>
             <v-card-title>Edit Complaint</v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                class="ma-6"
                v-model="first_name"
                :counter="10"
                label="First Name" 
              ></v-text-field>
              <v-text-field
                class="ma-6"
                v-model="last_name"
                :counter="10"
                label="Last Name"
              ></v-text-field>
              <v-text-field
                class="ma-6"
                v-model="bp_number"
                :counter="10"
                label="BP Number"
              ></v-text-field>
              <v-text-field
                class="ma-6"
                v-model="email"
                label="E-mail"
              ></v-text-field>

              <v-text-field
                class="ma-6"
                v-model="phone_no"
                label="Phone number"
              ></v-text-field>
              <v-text-field
                class="ma-6"
                v-model="address"
                :counter="10"
                label="Address"
              ></v-text-field>
              <v-select
                v-model="gender"
                :items="['Female', 'Male']"
                label="Gender"
                class="ma-6"
              ></v-select>
              <v-text-field
                class="ma-6"
                v-model="username"
                :counter="10"
                label="User Name"
              ></v-text-field>
              <v-text-field
                class="ma-6"
                v-model="password"
                :counter="10"
                label="Password"
              ></v-text-field>

              <v-btn color="indigo" class="ma-6 success" @click="update" :disabled="!valid">
                Update
              </v-btn>
            </v-form>
          </v-card>
      
      </form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {

  data: () => ({
    valid: true,
    first_name: "",
    last_name: "",
    bp_number: "",
    email: "",
    phone_no: "",
    address: "",
    gender: "",
    username: "",
    password: "",
    
  }),
  created() {
    let id = this.$route.params.id;
    axios.get(`http://localhost:3000/customer/${id}`).then(resp => {
      let data = resp.data;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.bp_number= data.bp_number;
      this.email = data.email;
      this.phone_no = data.phone_no;
      this.address = data.address;
      this.gender = data.gender;
      this.username = data.username;
      this.password = data.password;
    });
  },
 methods: {
    update() {
      
      let newCustomer = {
        first_name: this.first_name,
        last_name: this.last_name,
        bp_number: this.bp_number,
        email: this.email,
        phone_no: this.phone_no,
        address: this.address,
        gender: this.gender,
        username: this.username,
        password: this.password
      };
 axios
        .put(
          `http://localhost:3000/customer/${this.$route.params.id}`,
          newCustomer,
           this.$router.push({ path: "/Admin" })
        )
          
      return true;
    }
  
}
};
</script>
