<template>
    
  <v-bottom-navigation
      app
      background-color=#008000
      color=#32CD32
      v-model="selectedBottombarItem"
  >
            <v-btn v-for="item in draweritens" :key="item.title" @click="$router.push(item.url)"
            style = "background-color:#ffffff" 
            class="green--text">
              {{item.title}}
            </v-btn>
  </v-bottom-navigation>

</template>


<script>
export default {
  name: 'Bottom',

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