<template>
  <container>
    <nav>
      <v-app-bar app text color="indigo">
        <v-btn text color="indigo lighten-5" route to="/CustomerService">
          <v-icon right color="white">skip_previous</v-icon>
        </v-btn>

        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4">Send bill</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn text color="indigo lighten-5">
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
              v-model="bp_number"
              :rules="[(v) => !!v || ' Bp Number is required']"
              label="Bp Number"
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
      bp_number: "",
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
