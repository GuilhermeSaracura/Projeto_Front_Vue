<template>
    <v-app-bar
      app
      fixed
      color=#32CD32
      scroll-target="#scrolling-techniques">
      
      <v-spacer></v-spacer>
      <v-icon left>mdi-food-apple</v-icon>
      <v-toolbar-title>Health Foods</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-for="item in draweritens" :key="item.title">
            <v-btn @click="$router.push(item.url)">>
              {{item.title}}
            </v-btn>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Appbar',

  components:{
  },

  data: () => ({
    draweritens: [
      {
        title:"Home",
        url:"/Home",
        icon:"mdi-home",
      },
      {
        title:"Savory",
        url:"/Savory",
        icon:"mdi-pizza",
      },
      {
        title:"Candies",
        url:"/Candies",
        icon:"mdi-cake",
      },
      {
        title:"Juice",
        url:"/Juice",
        icon:"mdi-water",
      },
    ],

  selecteditem: 0,
  }),
};
</script>