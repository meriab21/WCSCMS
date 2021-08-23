<template>
  <v-container>
    <nav>
      <v-app-bar app text color="blue-grey darken-4">
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4">warning</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="blue-grey darken-4">
          <span class="white--text" route to="/user-profile"> My Account</span>
          <v-spacer></v-spacer>
        </v-btn>
        <v-btn text color="blue-grey darken-4">
          <span class="white--text">Notification</span>
          <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>

        <v-btn text color="blue-grey darken-4">
          <span class="white--text" route to="/login">Sign Out</span>
          <v-icon right color="white">exit_to_app</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        absolute
        temporary
        appapp
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
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>

    <v-container class="mt-9">
      <v-row justify="space-around">
        <v-card width="700px">
          <v-col cols="6">
            <v-text-field
               v-model="emp_id"
              :rules="[(v) => !!v || ' Username is required']"
              label="Employee_id"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="date" class="purple-input" type="Date" />
          </v-col>
          <v-col cols="6" md="12">
            <v-textarea
              label="Description"
              clearable
              clear-icon="mdi-close-circle"
            ></v-textarea>
          </v-col>

          <v-btn @click="send">
            Send
          </v-btn>
        </v-card>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  // components: {
  //     WarningAppBar: () => import('./components/core/AppBar'),
  //     WarningDrawer: () => import('./components/core/Drawer'),
  //     WarningSettings: () => import('./components/core/Settings'),
  //     WarningView: () => import('./components/core/View'),
  //   },
  data() {
    return {
      drawer: false,
      links: [
        // { icon: "home", text: "Home", route: "/" },
        // {
        //   icon: "person_add",
        //   text: "Create Account",
        //   route: "/create-account",
        // },
        // // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},
      ],
      valid: true,
      emp_id:"",
      date:"",
      description: "",
      type: "",
     
    };
  },
  methods: {
  send() {
      //if (this.$refs.form.validate()) {
      let newWarning = {
        emp_id: this.emp_id,
        date: this.date,
        description: this.description,
        caseWorker:this.caseWorker,
         };
     
      // console.log("newCustomer", newCustomer);
      axios
        .post("http://localhost:3000/warnings", newWarning)
     
        .then(() => {
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
