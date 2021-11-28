<template>
    
     <v-footer
    app 
    class="flex"
    flat
    tile
    color=#32CD32
    padless
  >
      <v-icon left>mdi-food-apple</v-icon>
      <v-toolbar-title>Health Foods - {{ new Date().getFullYear() }}</v-toolbar-title>
      <v-spacer></v-spacer>

        <br>

          <v-btn
            dark
            class="mx-1"
            icon 
            href = "https://github.com/GuilhermeSaracura" target="_blank"   
            title = "Github"
            >
              <v-icon size="35px">mdi-github</v-icon>
          </v-btn>

          <v-btn
            dark
            class="mx-1"
            icon 
            href = "https://www.linkedin.com/in/guilhermesaracura" target="_blank"    
            title = "LinkedIn"
            >
              <v-icon size="35px">mdi-linkedin</v-icon>
          </v-btn>
  </v-footer>
</template>