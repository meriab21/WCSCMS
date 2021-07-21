<template>
<v-container>
<nav> 
    <v-toolbar color="blue-grey darken-4" >
      
       <v-icon color="white" @click="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light white--text"> </span>
        <span class="white--text mx-4" > Customer</span>

        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="blue-grey darken-4">
            <span class="white--text" >My profile</span>
            <v-icon right color="white">mdi-account</v-icon>
        </v-btn>
        <v-btn flat color="blue-grey darken-4">
            <span class="white--text" >Notification</span>
            <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>
    <router-link
        to="/"
        tag="v-btn"
      >
        <v-btn flat color="blue-grey darken-4">
            <span class="white--text" >Log out</span>
            <v-icon right color="white">exit_to_app</v-icon>
        </v-btn>
    </router-link>
    </v-toolbar>
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
     v-model="address"
      :rules="[v => !!v || ' Address is required']"
      label="Address"
      required
    ></v-text-field>
     
  

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || ' Title is required']"
      label="Title"
      required
    ></v-select>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      :rules="[v => !!v || ' Description is required']"
     value="Description"
     required
    ></v-textarea>

   

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Send
      
    </v-btn>

<v-navigation-drawer app v-model="drawer" class="blue-grey lighten-5">
    <p class="display-2 mx-4 subheading grey--text">CSCMS</p>
<v-flex>
  <ViewBill/>
</v-flex>
    <v-list>
    <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 

    <v-list-item-action>
        <v-icon class="mx-4">{{link.icon}}</v-icon>
    </v-list-item-action>

        <v-list-item-content>
           <v-list-item-title class="dark--text">{{link.text}}</v-list-item-title>
        </v-list-item-content>
         
    </v-list-item>
    </v-list>
</v-navigation-drawer>




</nav>
</v-container>

</template>


<script>

export default {
  
    data() {
        return {
           fromDateVal: null,

            drawer: false,
            links: [
                { icon: '', text: 'View status', route: '/ViewStatus'},
                // { icon: '', text:'View Bill', route: '/ViewBill'},
                // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},
] 
           ,  valid: true,
      date: '',
      dateRules: [
        v => !!v || 'Date is required',
        v => /.+@.+\..+/.test(v) || 'Date must be valid',
      ],
      Address: '',
      AddressRules: [
        v => !!v || 'Address is required',
       v => /.+@.+\..+/.test(v) || 'Address must be valid',
      ],
    select: null,
      items: [
        'Emergency',
        'Inspection',
        'New connection',
        'Relocation',
      ],
     
    

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },}}
         ,computed: {
      fromDateDisp() {
        return this.fromDateVal;   }}}
</script>
