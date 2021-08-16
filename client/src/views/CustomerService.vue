<template>
    <nav>
      <v-app-bar app text color="blue-grey darken-4" >
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Customer Service</span>
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
            </v-list-item>
            </v-list> 
      </v-navigation-drawer>
    </nav>
  
    
  
    
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