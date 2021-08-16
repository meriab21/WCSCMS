<template>
  <v-main>
    <Header />
    <Hero />
  </v-main>
</template>
<script>
import Header from "../components/Header";
import Hero from "../components/Hero";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>
