<template>
<v-container >
 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
 <div>
    <v-toolbar
    color="grey darken-4"
    >
    

      <v-toolbar-title class="white--text">CSCMS</v-toolbar-title>

      <v-spacer></v-spacer>
<router-link
        to="/"
        tag="v-btn"
      >
      <v-btn icon color="white">
        <v-icon>mdi-home</v-icon>
      </v-btn>
</router-link>
    </v-toolbar>
  </div>
  
 
        
    
    <v-text-field
      v-model="Fname"
      :counter="10"
      :rules="nameRules"
      label="Fisrt Name"
      required
    ></v-text-field>
    <v-text-field
<<<<<<< HEAD

      v-model="location"
       :rules="[v => !!v || ' Location is required']"
      label="Location"
=======
      v-model="Lname"
      :counter="10"
      :rules="nameRules"
      label="Last Name"

      required
    ></v-text-field>
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
      v-model="phoneNumber"
      :rules="phoneNumberRules"
      
      label="Phone number"
      required
    ></v-text-field>
   <v-text-field
      v-model="location"
      :counter="10"
      :rules="nameRules"
      label="location"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || ' Case is required']"
      label="Case"
      required
    ></v-select>
    
 
    <v-textarea
      v-model="description"
      clearable
      clear-icon="mdi-close-circle"
     value="Please fill your report here"
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Send
      
    </v-btn>

   
  </v-form>
</v-container>
</template>

<script>

export default {
    name:"app",
    data: () => ({
       fromDateVal: null,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
<<<<<<< HEAD
    
=======
      Lname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],
      
>>>>>>> ab3e00f18716e3050fd11ce4b4806b19b9efc329
       phoneNumber: '',
      phoneNumberRules: [
        [v => !!v || 'This field is required',
        v => /^\d+$/.test(v)||'This field only accept numbers']
      ],
      location: '',
      locationRules: [
        v => !!v || 'Location is required',
      ],
      select: null,
      items: [
        'Fire',
        'Fall down',
        'Accident',
        'Rain',
      ],
     
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()){
        return axios({
        method: 'post',
          data: {
            Fname: this.Fname,
            Lname: this.Lname,
            phoneNumber: this.phoneNumber,
            location: this.location,
            select: this.select,
            description: this.description,
      },
   url: 'http://localhost:3000/controllers/emergencys',
    headers: {
       'Content-Type': 'application/json',
      },
<<<<<<< HEAD
    }
     ,computed: {
      fromDateDisp() {
        return this.fromDateVal; }}}  
=======
    })
   .then(() => {
     this.$router.push({ path:'/',component:Home});
     this.$refs.form.reset();
 })
    .catch(() => {
     });
      }
   return true;
 },
      }
      
    }
  
>>>>>>> ab3e00f18716e3050fd11ce4b4806b19b9efc329
</script>