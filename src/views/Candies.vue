<template>
    <v-row>
      <v-col cols="12">
        <h1 style="color:#32CD32">Candies</h1>
        <v-row>
          <v-col v-for="food in this.$store.getters.getListCandies" :key="food.name" cols="4">
            <Modelcard :food="food"></Modelcard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
import Modelcard from "../components/Modelcard.vue";

export default {
    name: 'Candies',
    components: {
      Modelcard
    },
  };
</script>