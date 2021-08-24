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
        <v-btn text color="blue-grey darken-4" >
          
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
       <template v-for="(not, index) in nots">
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
      </template> 
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
    <v-form class="ma-12" v-model="form">
    <v-col cols="6">
       <v-card-title class="mr-16 px=30">
        Register Complaint 
      </v-card-title>
    <v-text-field
      v-model="date"
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
    
    <v-card>
      <v-card-title>
        List of possible Complaints 
      </v-card-title>
      <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            >  1. If your complaint is Emergency= choose Operation Maintenance. </div>
            </v-card-text> 
          <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            >  2.If your complaint is curruption= choose Customer Service. </div>
            </v-card-text> 
        <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            > 3. If your complaint is Meter= choose Customer Service. </div>
            </v-card-text> 
             <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            >  4. If your complaint is Bill Unavailable= choose Customer Service. </div>
            </v-card-text> 
             <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            >  5. If your complaint is New Connection Delay= choose Operation Maintenance. </div>
            </v-card-text> 
             <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            >  6. If your complaint is Relocation Delay= choose Operation Maintenance.</div>
            </v-card-text> 
             <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            > 7. If your complaint is Manintenance Problem= choose Operation Maintenance. </div>
            </v-card-text> 
             <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            >  8. If your complaint is Unsatisfaied by Service= choose Customer Service. </div>
            </v-card-text> 
             <v-card-text>
        <div
             style="font-family: sans-serif; font-size: 17px; font-weight: lighter; margin-bottom: 0;"
            >  9. If your complaint is Unqualified Employee= choose Customer Service. </div>
            </v-card-text> 

    </v-card>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || ' Compliant is required']"
      label="Complaint"
      required
    ></v-select>
     <v-select
      v-model="department"
      :items="items2"
      :rules="[v => !!v || ' Department  is required']"
      label="Department"
      required
    ></v-select>
    <v-text-field
     v-model="description"
      :rules="[v => !!v || ' Description is required']"
      label="Description"
      required
    ></v-text-field>
    
    
    <v-btn
      color="success"
      class="mr-4"
      @click="send"
      :disabled="!valid">Send  
    </v-btn>
    </v-form>
<v-navigation-drawer  absolute temporary app v-model="drawer" class="blue-grey darken-4" >
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
            @click="dialog = false"
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
            nots:"",
            form: false,
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
       department: null,
        items2: [
        'Operation Maintenance',
        'Customer Service',
      ],
      description: "",
    }
    },
    
    mounted() {
    this.fetchBills();
     },
    methods: {
      send(){
        let newComplaint ={
          date: this.date,
          username: this.username,
          address: this.address,
          phone_no: this.phone_no,
          select: this.select,
          department: this.department,
          description: this.description,
        }; 
      axios
        .post("http://localhost:3000/complaints", newComplaint)
        .then(() => {
          this.$router.push({ path: "/"})
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
      async fetchBills() {
       
      // create and show the notification
    const showNotification = () => {
        // create a new notification
        const notification = new Notification('New bill ', {
            body: 'You got new bill report',
           // icon: './img/js.png'
        });
        setTimeout(() => {
            notification.close();
        }, 60 * 1000);
        // navigate to a URL when clicked
        notification.addEventListener('click', () => {
            
            this.$router.push({path: "/customer" });
    
        });
    }
// show an error message
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'You blocked the notifications';
    }

    // check notification permission
    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }
    // show notification or error
    granted ? showNotification() : showError();
   
    //  methods2: {
   
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
