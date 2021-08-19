<template>
  <v-container>
    <nav>
      <v-app-bar text color="blue-grey darken-4">
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Report</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="blue-grey darken-4">
          <span class="white--text">My Account</span>
          <!-- <v-icon right color="white">manager_panel_settings</v-icon> -->
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
        <p class="display-2 mx-4 subheading grey--text">CSCMS</p>

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
            <!-- </v-list-item-title> -->
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
<<<<<<< HEAD
    <h1>send warning</h1>
<v-card text class="ma-8">
 <v-form
    ref="form"
  >
 
  <v-spacer></v-spacer>
    <v-text-field
      v-model="emp_id"
      label="Employee Id"
      required
    ></v-text-field>
  <v-text-field
      v-model="date"
      label="Date"
      type="date"
      required
    ></v-text-field>

      <v-textarea
      v-model="description"
      label="Description"
      clearable
      clear-icon="mdi-close-circle"
     lable="Please fill your report here"
    ></v-textarea>
    
    
    <v-text-field
      v-model="department"
      :counter="30"
      label="Departement"
      required
    ></v-text-field>
  </v-form>
</v-card>
<v-col
    cols="12"
    class="text-right"
  >
    <v-btn
      color="success"
      class="mr-0"
      @click="send" 
    >
      Send
    </v-btn>
  </v-col>
</v-container>
</template>

<script>
import axios from "axios";
=======
    <v-card text class="ma-8">
      <v-form ref="form">
        <v-spacer></v-spacer>

        <v-text-field label="Date" required></v-text-field>

        <v-textarea
          label="Description"
          clearable
          clear-icon="mdi-close-circle"
          lable="Please fill your report here"
        ></v-textarea>

        <v-text-field :counter="30" label="Departement" required></v-text-field>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
>>>>>>> 0140d59a74cd28a34a4d4d31aa5e24f72bfaec15
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        {
          icon: "person_add",
          text: "view status",
          route: "/view-status",
        },

        // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},
      ],
<<<<<<< HEAD
      emp_id:"",
      date:"",
      description: "",
      department: "",
    
    }
    },
  methods: {
     send() {
       console.log("sending")
      //if (this.$refs.form.validate()) {
      let newWarning = {
        emp_id: this.emp_id,
        date: this.date,
        description: this.description,
        department: this.department,
         };
     
      // console.log("newCustomer", newCustomer);
      axios
        .post("http://localhost:3000/warnings", newWarning)
        
        .then((resp) => {
          console.log(resp)
          // this.get('/warnings', (req,res)=>{
          //   res.render('/')
          // })
          // /
          // this.$refs.form.reset();
        })
        .catch((err) => {
          console.log(err);
        });
      
      return true;
    },
  },
};
    
</script>
=======
      // messages: [
    };
  },
};
</script>
>>>>>>> 0140d59a74cd28a34a4d4d31aa5e24f72bfaec15
