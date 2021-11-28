<template>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        left
      >
        <v-list>
          <v-list-item class="px-3">
            <v-list-item-avatar>
              <v-img src="https://media-exp1.licdn.com/dms/image/C4E03AQEJYWvKxxlkEg/profile-displayphoto-shrink_200_200/0/1604628308797?e=1643241600&v=beta&t=ypK_ckM-nouYFc4DkYvKGfwGBCPFJ5SnjLrdsKHJo_Y"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h12">
                Guilherme Saracura
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
        <v-list-item-group v-model="selecteditem" color="green">
          <v-list-item v-for="item in draweritens" :key="item.title" link @click="$router.push(item.url)">

            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
        </v-list-item-group>
      </v-list>
        
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',

  components:{
  },

  data: () => ({
    draweritens: [
      {
        title:"Home",
        url:"/",
        icon:"mdi-home",
      },
      {
        title:"Dishes",
        url:"/Dishes",
        icon:"mdi-pizza",
      },
      {
        title:"Candies",
        url:"/Candies",
        icon:"mdi-cake-variant",
      },
      {
        title:"Juices",
        url:"/Juices",
        icon:"mdi-cup",
      },
    ],

  selecteditem: 0,
  }),
};
</script>