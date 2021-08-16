<template>
  <v-container>
    <nav>
      <v-toolbar flat color="blue-grey darken-4" app>
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4"> Customer</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="blue-grey darken-4">
          <span class="white--text">My profile</span>
          <v-icon right color="white">mdi-account</v-icon>
        </v-btn>
        <v-btn flat color="blue-grey darken-4">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <span class="white--text" v-bind="attrs" v-on="on"
                >Notification</span
              >
            </template>
            <v-card max-width="450" class="mx-auto">
              <v-toolbar color="blue-grey darken-4">
                <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

                <v-toolbar-title class="white--text"
                  >Notification</v-toolbar-title
                >

                <v-spacer></v-spacer>

                <v-btn icon color="white">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>

              <v-list three-line>
                <template v-for="(not, index) in nots">
                  <v-subheader
                    v-if="not.header"
                    :key="not.header"
                    v-text="not.header"
                  ></v-subheader>

                  <v-divider
                    v-else-if="not.divider"
                    :key="index"
                    :inset="not.inset"
                  ></v-divider>

                  <v-list-item v-else :key="not.title">
                    <v-list-item-avatar>
                      <v-img :src="not.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-html="not.title"></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="not.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-menu>

          <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>
        <router-link to="/" tag="v-btn">
          <v-btn flat color="blue-grey darken-4">
            <span class="white--text">Log out</span>
            <v-icon right color="white">exit_to_app</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/" tag="v-btn">
          <v-btn icon color="white">
            <v-icon>mdi-home</v-icon>
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
            :rules="[(v) => !!v || ' Date is required']"
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
        :rules="[(v) => !!v || ' Address is required']"
        label="Address"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || ' Title is required']"
        label="Title"
        required
      ></v-select>
      <v-textarea
        clearable
        clear-icon="mdi-close-circle"
        :rules="[(v) => !!v || ' Description is required']"
        value="Description"
        required
      ></v-textarea>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Send
      </v-btn>

      <v-navigation-drawer
        absolute
        temporary
        app
        v-model="drawer"
        class="blue-grey darken-4"
      >
        <p class="display-2  mx-4 subheading grey--text">CSCMS</p>

        <!-- <v-list>
    
    <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 

    <v-list-item-action>
        <v-icon class="mx-4">{{link.icon}}</v-icon>
    </v-list-item-action>

        <v-list-item-content>
           <v-list-item-title class="dark--text">{{link.text}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    </v-list> -->
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="mx-14" color="white" v-bind="attrs" v-on="on">
              View Status
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="mx-14" color="white" v-bind="attrs" v-on="on">
              View Bill
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-navigation-drawer>
    </nav>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fromDateVal: null,
      dialog: false,
      drawer: false,
      // links: [
      //     { icon: '', text: 'View status', route: '/ViewStatus'},

      //     ]
      valid: true,
      date: "",
      dateRules: [
        (v) => !!v || "Date is required",
        (v) => /.+@.+\..+/.test(v) || "Date must be valid",
      ],
      Address: "",
      AddressRules: [
        (v) => !!v || "Address is required",
        (v) => /.+@.+\..+/.test(v) || "Address must be valid",
      ],
      select: null,
      items: ["Emergency", "Inspection", "New connection", "Relocation"],
      nots: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],

      methods: {
        validate() {
          this.$refs.form.validate();
        },
      },
    };
  },
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    },
  },
};
</script>
