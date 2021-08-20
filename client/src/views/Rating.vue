<template>
<!-- <v-container fluid grid-list-xl>
        <v-layout
        justify-space-around>
        <v-flex xs6>
            <v-form
            ref="form"
            lazy-validation>
            <v-text-field
            
            label="Name">
            </v-text-field>
<div> -->
    <!-- <vue-star-rate
      :rateRange="3"
      :maxIcon="5"
      :iconHeight="22"
      :iconWidth="22"
      :hasCounter="true"
      iconColor="#FFFF99"
      iconColorHover="#FFFF99"
      iconShape="star"
    ></vue-star-rate>
  </div> -->
            <!-- <v-btn
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
export default 

{
 components: { vueStarRate },
data(){
  return{}
}

};

</script> -->
<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">

        <v-btn class="ma-15"
          @click="dialog = false"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Rate service
        </v-btn>
      </template>

<v-container fluid grid-list-xl>
        <v-layout
        justify-space-around>
        <v-flex xs6>
            <v-form
            ref="form"
            lazy-validation>
            <v-text-field
            
            label="Name">
            </v-text-field>
 
  <v-card
    class="elevation-16 mx-auto"
    width="300"
  >
    <v-card-title class="text-h5">
      Rate our service
    </v-card-title>
    <v-card-text>
      If you enjoy in our service, please take a few seconds to rate your employes. It really helps!

      <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
        
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-btn text  @click="dialog = false">
       
        No Thanks
      </v-btn>
      <v-btn
        color="primary"
        text  @click="dialog = false"
      >
        Rate Now
      </v-btn>
    </v-card-actions>
  </v-card>
            </v-form>
        </v-flex>
        </v-layout>
</v-container>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    
    data: () => ({
      dialog: false,
      rating: 4.5,
    }),
  }
</script>