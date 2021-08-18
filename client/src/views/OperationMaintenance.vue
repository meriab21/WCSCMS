<template>
<v-container>
   <nav>
      <v-app-bar text color="blue-grey darken-4" app>
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Operation maintenance</span>
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

          <p class="display-2 mx-4 subheading grey--text">CSCMS</p> -->

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
     <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <!-- <v-toolbar-title>complains</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon> -->
      <!-- </v-btn> -->

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
            <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">
        el·ee·mos·y·nar·y
      </p>
      <p>adjective</p>
      <div class="text--primary">
        relating to or dependent on charity; charitable.<br>
        "an eleemosynary educational institution."
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card> 
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

 </v-container> 
</template>
<script>
export default {
    data(){
        return{
           reveal: false,
           tab: null,
        items: [
          'complains', ,
        ],
       
            drawer:false,
     links: [
                { icon: '', text: 'View report', route: '/ViewReport'},
              ]
}}}
</script>