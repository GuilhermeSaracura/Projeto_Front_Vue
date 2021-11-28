<template>
    <v-app-bar
      app
      fixed
      color=#32CD32
      scroll-target="#scrolling-techniques">
      
      <v-icon left>mdi-food-apple</v-icon>
      <v-toolbar-title>Health Foods</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-for="item in draweritens" :key="item.title" >
            <v-btn @click="$router.push(item.url)"
            style = "background-color:#008000" 
            class="white--text">
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
        url:"/",
      },
      {
        title:"Dishes",
        url:"/Dishes",
      },
      {
        title:"Candies",
        url:"/Candies",
      },
      {
        title:"Juices",
        url:"/Juices",
      },
    ],

  selecteditem: 0,
  }),
};
</script>