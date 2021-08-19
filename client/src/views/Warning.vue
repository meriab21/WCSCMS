<template>
  <v-container>
    <nav>
      <v-app-bar app text color="blue-grey darken-4">
        <v-icon color="white" @click.stop="drawer = !drawer">menu_open</v-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light white--text"> </span>
          <span class="white--text mx-4">warning</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="blue-grey darken-4">
          <span class="white--text" route to="/user-profile"> My Account</span>
          <v-spacer></v-spacer>
        </v-btn>
        <v-btn text color="blue-grey darken-4">
          <span class="white--text">Notification</span>
          <v-icon right color="white">circle_notifications</v-icon>
        </v-btn>

        <v-btn text color="blue-grey darken-4">
          <span class="white--text" route to="/login">Sign Out</span>
          <v-icon right color="white">exit_to_app</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        absolute
        temporary
        appapp
        v-model="drawer"
        class="blue-grey lighten-5"
      >
        <p class="display-2 mx-4 subheading grey--text">CSCMS</p>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon class="mx-4">{{ link.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="dark--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>

    <v-container class="mt-9">
      <v-row justify="space-around">
        <v-card width="700px">
          <v-col cols="6">
            <v-text-field
              :rules="[(v) => !!v || ' Username is required']"
              label="Employee_id"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="date" class="purple-input" type="Date" />
          </v-col>
          <v-col cols="6" md="12">
            <v-textarea
              label="Description"
              clearable
              clear-icon="mdi-close-circle"
            ></v-textarea>
          </v-col>

          <v-btn>
            Send
          </v-btn>
        </v-card>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      drawer: false,
      links: [{ icon: "home", text: "Home", route: "/" }],
      valid: true,
      date: "",
    };
  },
};
</script>
