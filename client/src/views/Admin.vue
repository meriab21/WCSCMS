<template>
  <v-container>
    <nav>
      <v-app-bar app text color="blue-grey darken-4">
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Admin</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="blue-grey darken-4" router to="/user-profile">
          <span class="white--text">My Account</span>
          <v-icon right color="white">admin_panel_settings</v-icon>
        </v-btn>
        <v-btn text color="blue-grey darken-4">
          <span class="white--text">Notification</span>
          <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>

        <v-btn text color="blue-grey darken-4">
          <span class="white--text">Sign Out</span>
          <v-icon right color="white">exit_to_app</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        absolute
        temporary
        app
        v-model="drawer"
        class="blue-grey lighten-5"
      >
        <p class="display-2 mx-4 subheading grey--text">WCSCMS</p>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon class="mx-4">{{ link.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="dark--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>

    <v-container fluid class="ma-10">
      <v-row justify="center">
        <v-subheader>List of Accounts</v-subheader>
       
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
          Customers Accounts
        </v-card-title>
           <v-card-text>
            <!-- :headers="headers" -->
            <v-data-table :items="customers" :headers="customer_headers">
              <template valid-slot:item.actions="{item}"> 
               <router-link >
                 <vue-icon small class="mr-2" >mdi-pencil</vue-icon>
                 </router-link> 
                <v-icon small @click="deleteItem1(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>  
          

          <v-card class="ma-10" >
            <v-card-title class="text-h5 grey lighten-2">
          Employee Accounts
        </v-card-title>
              <v-card-text>
            <v-data-table :headers="employee_headers" :items="employees">
              <template valid-slot:item.actions="{ item }"> 
                <router-link >
                <v-icon small class="mr-2">mdi-pencil</v-icon>
                </router-link>
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
          </v-card>
      </v-row>
    </v-container>
  </v-container>
  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        {
          icon: "person_add",
          text: "Create Account",
          route: "/createaccount",
        },
       
      ],
      messages: [
        {
          color: "red",
          icon: "emoji_people",
          name: "Customer Accounts",
          new: 1,
          total: 3,
          title: "Active",
        },
        {
          color: "indigo",
          icon: "support_agent",
          name: "Employee Accounts",
          new: 2,
          total: 4,
          title: "Active",
        },
      ],
      customers: [],
      employees: [],
      tabs: "",
      editedIndex:-1,
      editItemData:{
        first_name:'',
        last_name:'',
        email:'',
        phone_no:'',
        address:'',
        gender:'',
        user_name:'',
        password:'',
      },
      customer_headers: [
        { text: "Id", value: "_id" },
        { text: "First Name", value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phone_no" },
        { text: "Address", value: "address" },
        { text: "Gender", value: "gender" },
        { text: "User Name", value: "username" },
        { text: "Password", value: "password" },
        { text: "Action", value: "actions", sortable: false }
      ],
      employee_headers: [
        { text: "Id", value: "_id" },
        { text: "Employee Id", value: "emp_id" },
        { text: "First Name", value: "fname" },
        { text: "Last Name", value: "lname" },
        { text: "Email", value: "email2" },
        { text: "Phone Number", value: "phone_no2" },
        { text: "Gender", value: "gender2" },
        { text: "Branch", value: "branch" },
        { text: "Department", value: "department" },
        { text: "User Name", value: "username2" },
        { text: "Password", value: "password2" },
        { text: "Action", value: "actions", sortable: false }
      ]
       };
  },
  
  mounted() {
    this.fetchCustomers();
    this.fetchEmployees();
  },
  methods: {
    async fetchCustomers() {
      axios({
        method: "get",
        url: "http://localhost:3000/customers"
      })
        .then(response => {
          this.customers = response.data;
          console.log(this.customers);
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchEmployees() {
      axios
        .get("http://localhost:3000/employees")
        .then(res => {
          this.employees = res.data;
          console.log(this.employees);
        })
        .catch(error => {
          console.error(error);
        });
    },
    editItem(item){

      this.editedIndex = this.custmers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      
      // axios
      //   .put("http://localhost:3000/customers"),
      
    },
    deleteItem1(item) {
      axios
    .delete(`http://localhost:3000/customer/${item._id}`)
    .then(res => {
      if(res.data.success){
       this.customers = this.customers.filter(customer => customer._id != item._id)
      }
      else{
        console.log('not success')
      }
    })
    .catch(error => {
      console.error(error);
    });
      // console.log(item._id)
      // this.editedIndex = this.customers.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.customers.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    deleteItem(item) {
      axios
    .delete(`http://localhost:3000/employee/${item._id}`)
    .then(res => {
      if(res.data.success){
       this.employees = this.employees.filter(employee => employee._id != item._id)
      }
      else{
        console.log('not success')
      }
    })
    .catch(error => {
      console.error(error);
    });
      // console.log(item._id)
      // this.editedIndex = this.customers.indexOf(item);
      // this.editedItem = Object.assign({}, item);
      // this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.employees.splice(this.editedIndex, 1);
      this.closeDelete();
    }
  }
    };
  

</script>
