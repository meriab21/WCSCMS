<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Bill Report
        </v-card-title>

        <v-card-text    
        >
          <v-col cols="12">
                    <div
                      style="font-family: sans-serif; font-size: 20px; font-weight: lighter; margin-bottom: 0;"
                    >Date {{bill.date}}</div>
                    <div
                      style="font-family: sans-serif; color: #333333; margine-top: 0;"
                    >Service Charge: {{bill.service_charge}}</div>
                    <div
                      style="font-family: sans-serif; font-size: 20px; font-weight: lighter; margin-bottom: 0;"
                    >Payment Date {{bill.payment_date}}</div>
                  </v-col>
          
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bills: [],

      }
      
    },
    mounted() {
    this.fetchComplaints();
  },
  methods: {
     async fetchComplaints() {
         axios({
        method: "get",
        url: "http://localhost:3000/bills"
      })
        .then(response => {
          this.complaints = response.data;
          console.log(this.complaints);
        })
        .catch(error => {
          console.error(error);
        });

     }}

  }
</script>