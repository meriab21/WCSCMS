<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app class="blue-grey lighten-5"> 
         <p class="display-2 mx-4 subheading grey--text">CSCMS</p>

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
        <v-app-bar app class="blue-grey darken-4"  >
            <v-app-bar-nav  @click="drawer=!drawer"></v-app-bar-nav>
         
              <v-icon color="white" @click="drawer = !drawer">menu_open</v-icon>
            <span class="font-weight-light white--text"> </span>
        <span class="white--text mx-4" > Customer Service</span>
          <v-spacer></v-spacer>
        <v-btn flat color="blue-grey darken-4">
            <span class="white--text" >My profile</span>
            <v-icon right color="white">mdi-account</v-icon>
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
     
        </v-app-bar>
      <v-spacer></v-spacer>
    
    <!-- <v-menu
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
      
    </v-btn>  -->
    </v-app>
</template>
<script>
export default {
    data(){
        return{
            drawer:false,
     links: [
                { icon: '', text: 'View report', route: '/ViewReport'},
                { icon: '', text:'Send Bill', route: '/SendBill'},]
}}}
</script>