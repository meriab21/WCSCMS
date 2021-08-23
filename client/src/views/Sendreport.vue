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
    <v-card text class="ma-8">
      <v-form ref="form">
        <v-spacer></v-spacer>

        <v-text-field v-model="date" label="Date" required type="date"></v-text-field>

        <v-textarea
          v-model="description"
          label="Description"
          clearable
          clear-icon="mdi-close-circle"
          lable="Please fill your report here"
        ></v-textarea>

        <v-text-field :counter="30" label="Departement" required></v-text-field>
      </v-form>
    <v-btn @click="send" :disabled="!valid">Send</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
 
  data() {
    return {
      drawer: false,
      links: [
        
      ],
      valid: true,
     
      date:"",
      description: "",
      department: "",
     
    };
  },
  methods: {
  send() {
      //if (this.$refs.form.validate()) {
      let newReport = {
        
        date: this.date,
        description: this.description,
        department: this.department,
         };
     
      // console.log("newCustomer", newCustomer);
      axios
        .post("http://localhost:3000/reports", newReport)
      
        .then((resp) => {
          console.log(resp)
          this.get('/warnings', (req,res)=>{
            res.render('/')
          })
          // this.$router.push({ path: "/" });
          this.$refs.form.reset();
        })
        .catch((err) => {
          console.log(err);
        });
      //} // VALIDATION END
      return true;
    },
  },
};
</script>
