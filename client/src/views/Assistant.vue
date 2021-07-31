<template>
<nav>
    <v-app>
        <v-navigation-drawer absolute temporary v-model="drawer" app class="blue-grey darken-4"> 
         <p class="display-2 mx-4 subheading grey--text">CSCMS</p>

    <v-list>
    <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 

    <v-list-item-action>
        <v-icon class="mx-4">{{link.icon}}</v-icon>
    </v-list-item-action>

        <v-list-item-content>
           <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
        </v-list-item-content>
         
    </v-list-item>
    </v-list>    
        </v-navigation-drawer>
        <v-app-bar flat  app class="blue-grey darken-4"  >
            <v-app-bar-nav  @click="drawer=!drawer"></v-app-bar-nav>
         
              <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
            <span class="font-weight-light white--text"> </span>
        <span class="white--text mx-4" > Assistant</span>
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
    <v-col cols="12" >
        <v-card color="#23262D"
        >
        <v-app-bar flat>
<v-toolbar-title class="grey-text-title">Complains</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-chip class="ma-2" color="grey darke-1" pill>
            Today
            <v-icon right small color="cyan">
            mdi-expand-more
            </v-icon>
        </v-chip>
            </v-app-bar>
            <v-data-table :headers="headers" :items="desserts"  item-key="name" class="dattab"
            >
            <template v-slot:item.gultenfree="{item}">

            <v-simple-checkbox v-model ="item.gultenfree" color="cyan"></v-simple-checkbox>
            </template>
            <template v-slot:item.action="">
                <v-icon small>mdi-pencil</v-icon>
            </template>
            </v-data-table>
            </v-card>

    </v-col>
   
    </v-app>
    </nav>
</template>
<script>
export default {
    name:'Asssitant',
      data(){
        return{
            drawer:false,
     links: [
                { icon: '', text: 'View report', route: '/ViewReport'},
              ]
,
     
      desserts: [
        {
          name: 'Frozen Yogurt',
          date: 159,
          title: 24,
         Description: 6.0,
          status: 4.0,
         
        },
        {
          name: 'Ice cream sandwich',
          date: 159,
          title: 24,
         Description: 6.0,
          status: 4.0,
        },
        {
          name: 'Eclair',
         date: 159,
          title: 24,
         Description: 6.0,
          status: 4.0,
        },
        {
          name: 'Cupcake',
          date: 159,
          title: 24,
         Description: 6.0,
          status: 4.0,
        },
        {
          name: 'Gingerbread',
         date: 159,
          title: 24,
         Description: 6.0,
          status: 4.0,
        },
        // {
        //   name: 'Jelly bean',
        //   calories: 375,
        //   fat: 0.0,
        //   carbs: 94,
        //   protein: 0.0,
        //   iron: '0%',
        // },
        // {
        //   name: 'Lollipop',
        //   calories: 392,
        //   fat: 0.2,
        //   carbs: 98,
        //   protein: 0,
        //   iron: '2%',
        // },
        // {
        //   name: 'Honeycomb',
        //   calories: 408,
        //   fat: 3.2,
        //   carbs: 87,
        //   protein: 6.5,
        //   iron: '45%',
        // },
        // {
        //   name: 'Donut',
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        //   iron: '22%',
        // },
        // {
        //   name: 'KitKat',
        //   calories: 518,
        //   fat: 26.0,
        //   carbs: 65,
        //   protein: 7,
        //   iron: '6%',
        // },
      ],
      headers: [
        {
          text: 'List',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Date', value: 'date' },
        { text: 'Title', value: 'title' },
        { text: 'Description (g)', value: 'Description' },
        { text: 'Status', value: 'status' },
        { text: 'Iron (%)', value: 'iron' },
      ],
    
        }}}
</script>