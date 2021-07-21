<template>
<v-app>
    <v-container>
         <v-row justify="space-around">
      <v-card width="700px" >
        <v-img
          height="400px"
          src="../assets/images/11.png"
        >      </v-img>
        <v-spacer></v-spacer>
      <v-menu
      v-model="fromDateMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          label="Date"
           :rules="[v => !!v || ' Date is required']"
          readonly
          :value="fromDateDisp"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        locale="en-in"
     
        v-model="fromDateVal"
        no-title
        @input="fromDateMenu = false"
      ></v-date-picker>
    </v-menu>
    
     <v-text-field
     v-model="service_charge"
      :rules="[v => !!v || ' Service_charge is required']"
      label="Service_charge"
      required
    ></v-text-field>
     <v-text-field
     v-model="payment_date"
      :rules="[v => !!v || ' Payment_date is required']"
      label="Payment_date"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Send
      
    </v-btn>

      </v-card>
         </v-row>
    </v-container>
</v-app>  
</template>
<script>
export default {
      data()  {
          return{ 
              fromDateVal: null,
                valid: true,
                  methods: {
      validate () {
        this.$refs.form.validate()
      },
      }  
          }}
             ,computed: {
      fromDateDisp() {
        return this.fromDateVal;   } }
      
    
}
</script>