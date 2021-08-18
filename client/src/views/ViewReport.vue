<template>
<v-container >
      <nav>
      <v-app-bar text color="blue-grey darken-4" >
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Manager</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="blue-grey darken-4">
          <span class="white--text">My Account</span>
          <v-icon right color="white">manager_panel_settings</v-icon>
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
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 

            <v-list-item-action>
                <v-icon class="mx-4">{{link.icon}}</v-icon>
            </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="dark--text">{{link.text}}</v-list-item-title>
                </v-list-item-content>
                  <!-- </v-list-item-title> -->
            </v-list-item>
            </v-list> 
      </v-navigation-drawer>
    </nav>
<v-card text class="ma-8">
 <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
 
  <v-spacer></v-spacer>

  <v-text-field
  v-model="date"
      label="Date"
      required
    ></v-text-field>

         <v-textarea
      v-model="description"
      label="Description"
      clearable
      clear-icon="mdi-close-circle"
     lable="Please fill your report here"
    ></v-textarea>
    
    
    <v-text-field
      v-model="Lname"
      :counter="30"
      :rules="Departemant"
      label="Departement"
      required
    ></v-text-field>
     
  </v-form>
</v-card>
</v-container>
</template>

<script>

export default {
   data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        {
          icon: "person_add",
          text: "view status",
          route: "/view-status",
        },
        // { icon: 'recent_actors', text: 'View Users Account', route: '/view_accounts'},
      ],
      // messages: [
    
    }}}
</script>