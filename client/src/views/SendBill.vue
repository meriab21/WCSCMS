<template>
  <container>
    <nav>
      <v-app-bar app text color="blue-grey darken-4">
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4">Send bill</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="blue-grey darken-4">
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
    </nav>

    <v-app>
      <v-container>
        <v-row justify="space-around">
          <v-card width="700px">
            <v-img height="400px" src="../assets/images/11.png"> </v-img>
            <v-spacer></v-spacer>
            <v-col cols="6">
              <v-text-field v-model="date" class="purple-input" type="Date" />
            </v-col>

            <v-text-field
              v-model="username"
              :rules="[(v) => !!v || ' Username is required']"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              v-model="service_charge"
              :rules="[(v) => !!v || ' Service_charge is required']"
              label="Service_charge"
              required
            ></v-text-field>
            <v-col cols="6">
              <v-text-field
                v-model="payment_date"
                :rules="[(v) => !!v || ' Payment_date is required']"
                label="Payment_date"
                type="Date"
                required
              ></v-text-field
            ></v-col>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="send"
            >
              Send
            </v-btn>
          </v-card>
        </v-row>
      </v-container>
    </v-app>
  </container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      drawer: false,

      valid: true,
      date: "",
      username: "",
      service_charge: "",
      payment_date: "",
    };
  },
  methods: {
    send() {
      let newBill = {
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

          this.get("/bils", (req, res) => {
            res.render("/");
          });
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
