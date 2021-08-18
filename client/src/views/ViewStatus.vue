<template>
<v-container>
   <nav>
      <v-app-bar flat color="blue-grey darken-4" app>
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Manager</span>
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
                  <!-- </v-list-item-title> -->
            </v-list-item>
            </v-list> 
      </v-navigation-drawer>
    </nav>

<div class="dashboard">
  <h1 class="subheading grey--text">HANDELED COMPLAINT</h1>

   <v-row justify="center">
  <v-container fluid class="my-5">
    <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
         <v-expansion-panel-header>
            <v-row align="center" class=" spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                </v-avatar>
              </v-col>
            </v-row>
                 
        
        <v-flex xs12 md6>
          <div class="caption grey--text">complain</div>
          <div> {{project.title}}</div>
        </v-flex> 
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">assigned caseworker</div>
          <div>{{project.person}}</div></v-flex>
            <v-flex xs6 sm4 md2>
          <div class="caption grey--text">date</div>
          <div>{{project.date}}</div>
            </v-flex>
        
         <v-flex xs6 sm4 md2>
          <!-- <div class="caption grey--text">status</div>
          <div>{{project.status}}</div> -->
          <div>
<!-- <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip> -->
<v-chip id="chip" small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
          </div>
          </v-flex> 
          
         </v-expansion-panel-header>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
    
    </v-container>
   </v-row>
</div>
</v-container>

</template>
<script>
export default {
  data(){
    return{
      drawer:false,
      links:[
        { icon: "home", text: "Home", route: "/" },
        {
          icon: "visibility",
          text: "view Report",
          route: "/view-Report"
        },
      ],
      projects:[
        { title: "Users 1", date: "1st jan 2020", status: 'ongoing' },
        { title: "Users 2", date: "2st feb 2020", status: 'complete' },
        { title: "Users 3", date: "23st june 2019", status: 'overdue' },
        
      ]

    }
  }
}
</script>
  <style >
  /* .project.ongoing{
    border-left:4px solid orange
  }

.v-chip.ongoing{
    background: #ffaa2c;
}
.v-chip.complete{
    background: #3cd1c2;

}

.v-chip.warning{
    background: #f83e70;

} */
#chip.v-chip.complete {background: #00cc00;}
#chip.v-chip.ongoing{background: #0099ff;}
#chip.v-chip.overdue {background: #ff0000;}

</style> 




