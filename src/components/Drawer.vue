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

        <h3>Componentes:</h3>
        <Components></Components>
        
    </v-navigation-drawer>
</template>

<script>
import Components from "@/components/Components"
export default {
  name: 'Drawer',
  components:{
    Components
  },

  data: () => ({
  }),
};
</script>