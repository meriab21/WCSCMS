<template>
  <v-container>
    <v-form>
      <div>
        <v-toolbar color="grey darken-4">
          <v-spacer></v-spacer>
          <v-btn icon color="white" route to="/">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-toolbar>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon color="white" route to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-text-field
        v-model="Fname"
        :counter="10"
        label=" First Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="Lname"
        :counter="10"
        label=" Last Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="phone_no"
        label="Phone number"
        required
      ></v-text-field>
      <v-text-field
        v-model="location"
        :counter="10"
        label="Location"
        required
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || ' Case is required']"
        label="Case"
        required
      ></v-select>

      <v-btn color="success" class="mr-4" @click="send" :disabled="!valid">
        Send
      </v-btn>

      <v-btn color="success" class="mr-4" @click="validate">
        Send
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Noncustomer",
  data: () => ({
    valid: true,
    Fname: "",
    Lname: "",
    phone_no: "",
    location: "",
    select: null,
    items: ["Transformer Burning", "Fire", "Fall down", "Accident"],
    validate: "",
    select: null,
    items: ["Fire", "Fall down", "Accident", "Rain"],
  }),

  methods: {
    send() {
      let newEmergency = {
        Fname: this.Fname,
        Lname: this.Lname,
        phone_no: this.phone_no,
        location: this.location,
        select: this.select,
      };
      axios
        .post("http://localhost:3000/emergencys", newEmergency)
        .then(() => {
          this.$router.push({ path: "/" });
          this.$refs.form.reset();

          this.get("/emergencys", (req, res) => {
            res.render("/");
          });
        })
        .catch((err) => {
          console.log(err);
        });

      return true;
    },
  },
};
</script>
