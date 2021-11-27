<template>
  <v-app>
    <v-system-bar
        app
        color=#008000
        fixed
      >
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>23:59</span>
  </v-system-bar>

  <Appbar></Appbar>
  <Drawer></Drawer>
  
    <v-main>
      <v-content>
         <div id="menu">
          <div id="nav">
            <router-link to="/Home">Home</router-link> |
            <router-link to="/About">About</router-link>|
            <router-link to="/Description">Description</router-link>|
            <router-link to="/Informations">Informations</router-link>
          </div>
          <router-view/>
        </div>
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
export default {
  name: 'App',
  components:{
    Appbar,
    Drawer
  },

  data: () => ({
  }),
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#h2{
    font-style: italic;
    color: darkgreen;
}
</style>

