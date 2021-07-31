<template>
<v-container fluid grid-list-xl>
        <v-layout
        justify-space-around>
        <v-flex xs6>
            <v-form
            ref="form"
            lazy-validation>
            <v-text-field
            v-model="name"
            label="Name">
            </v-text-field>
<div>
    <vue-star-rate
      :rateRange="3"
      :maxIcon="5"
      :iconHeight="22"
      :iconWidth="22"
      :hasCounter="true"
      iconColor="#FFFF99"
      iconColorHover="#FFFF99"
      iconShape="star"
    ></vue-star-rate>
  </div>
            <v-btn
            color="teal accent-3"
            class="mr-4 white--text"
            @click="addemployee">
             
             Submit
            </v-btn>

            </v-form>
        </v-flex>
        </v-layout>
  
</v-container>
</template>

<script>
import vueStarRate from "vue-js-star-rating";
export default {
 components: { vueStarRate }
};
</script>