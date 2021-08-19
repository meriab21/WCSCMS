<template>
<v-container>
<nav> 
    <v-app-bar app text color="blue-grey darken-4" >
      
       <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Customer</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="blue-grey darken-4">
            <span class="white--text" >My profile</span>
            <v-icon right color="white">mdi-account</v-icon>
        </v-btn>
        <v-btn text color="blue-grey darken-4">
          
  <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span class="white--text" 
          v-bind="attrs"
          v-on="on">Notification</span>
    
      </template>
        <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-toolbar color="blue-grey darken-4" >
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Notification</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon color="white">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list three-line>
      <!-- <template v-for="(not, index) in nots">
        <v-subheader
          v-if="not.header"
          :key="not.header"
          v-text="not.header"
        ></v-subheader>

        <v-divider
          v-else-if="not.divider"
          :key="index"
          :inset="not.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="not.title"
        >
          <v-list-item-avatar>
            <v-img :src="not.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="not.title"></v-list-item-title>
            <v-list-item-subtitle v-html="not.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template> -->
    </v-list>
  </v-card>
    </v-menu>
            
            <v-icon right color="white">circle_notifications</v-icon>
            
        </v-btn>
    
        <v-btn text color="blue-grey darken-4" route to='/'>
            <span class="white--text"  >Log out</span>
            <v-icon right color="white">exit_to_app</v-icon>
        </v-btn>
    
    
      <v-btn icon color="white" route to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

    </v-app-bar>
     <v-spacer></v-spacer> 
    <v-form class="ma-12">
    <v-col cols="6">
    <v-text-field
      v-model="date"
      label="Date"
      class="purple-input"
      type="Date"/>
                </v-col>

    <v-text-field
     v-model="username"
      :rules="[v => !!v || ' Address is required']"
      label="Username"
      required
    ></v-text-field>
     <v-text-field
     v-model="address"
      :rules="[v => !!v || ' Address is required']"
      label="Address"
      required
    ></v-text-field>
  <v-text-field
     v-model="phone_no"
      :rules="[v => !!v || ' Phone number is required']"
      label="Phone number"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || ' Title is required']"
      label="Case"
      required
    ></v-select>
    
    <v-btn
      color="success"
      class="mr-4"
      @click="register"
      :disabled="!valid">Send  
    </v-btn>
    </v-form>
<v-navigation-drawer absolute temporary app v-model="drawer" class="blue-grey darken-4" >
    <p class="display-2  mx-4 subheading grey--text">CSCMS</p>



      
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="mx-14"
        color="white"
          v-bind="attrs"
          v-on="on"
        >
          View Bill
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Bill Report
        </v-card-title>
         <v-list v-for="(bill, index) in bills" :key="index">
        <v-list-item>
          <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            > Date :{{bill.date}}</div>
        </v-list-item>
         <v-list-item>
         <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            > Service_Charge :{{bill.service_charge}}</div>
            </v-list-item>
         <v-list-item>
            <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            >  Payment_Date :{{bill.payment_date}}</div>
         </v-list-item>
         

        
         </v-list>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog1 = false"
          >
            ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
</v-navigation-drawer>




</nav>
</v-container>

</template>

<script>

import axios from "axios";
export default {
  
    data() {
      
        return {
            bills: [],

            dialog: false,
            drawer: false,
            
             valid: true,
      date: '',
      username:'',
      address: '',
      phone_no:'',
      select: null,
      items: [
        'Emergency',
        'Corruption',
        'Meter',
        'Bill Unavailable',
        'New Connection Delay',
        'Relocation Delay',
        'Manintenance Problem',
        'Unsatisfaied by Service',
        'Unqualified Employee',
      ],
      
    
    }
    },
   
    methods: {
      register(){
        let newComplaint ={
          date: this.date,
          username: this.username,
          address: this.address,
          phone_no: this.phone_no,
          select: this.select,
          
        }; 
      axios
        .post("http://localhost:3000/complaints", newComplaint)
        .then(() => {
          //this.$router.push({ path: "/" });
          this.$refs.form.reset();


          this.get('/complaints', (req,res)=>{
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
    mounted() {
    this.fetchBills();
     },
     methods: {
     async fetchBills() {
       axios({
        method: "get",
        url: "http://localhost:3000/bills"
      })
        .then(response => {
          this.bills = response.data;
          console.log(this.bills);
        })
        .catch(error => {
          console.error(error);
        });
       }
}
}
</script>
