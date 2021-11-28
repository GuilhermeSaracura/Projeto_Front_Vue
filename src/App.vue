<template>
  <v-app>

    <Systembar></Systembar>

    <Appbar></Appbar>

    <Drawer></Drawer>
  
    <v-main>
      <v-content>
      <router-view></router-view>
      </v-content>
    </v-main>

     <v-footer
    app
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      color=#32CD32
    >
      <v-card-title class="teal">
        <strong>Minhas redes sociais:</strong>

        <v-spacer></v-spacer>

          <v-btn
            dark
            class="mx-4"
            icon 
            href = "https://github.com/GuilhermeSaracura" target="_blank"   
            title = "Github"
            >
              <v-icon size="35px">mdi-github</v-icon>
          </v-btn>

          <v-btn
            dark
            class="mx-4"
            icon 
            href = "https://www.instagram.com/guisaracura/" target="_blank"   
            title = "Instagram"
            >
              <v-icon size="35px">mdi-instagram</v-icon>
          </v-btn>

          <v-btn
            dark
            class="mx-4"
            icon 
            href = "https://www.linkedin.com/in/guilhermesaracura" target="_blank"    
            title = "LinkedIn"
            >
              <v-icon size="35px">mdi-linkedin</v-icon>
          </v-btn>

      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
  <v-bottom-navigation
    app
    color=#228B22
    horizontal
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar"
import Drawer from "@/components/Drawer"
import Systembar from "@/components/Systembar"
export default {
  name: 'App',
  components:{
    Appbar,
    Drawer,
    Systembar
  },

  data: () => ({
  }),
};
</script>


