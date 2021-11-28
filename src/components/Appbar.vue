<template>
    <v-app-bar
      app
      fixed
      color=#32CD32
      scroll-target="#scrolling-techniques">
      
      <v-icon left>mdi-food</v-icon>
      <v-toolbar-title>Foods</v-toolbar-title>

      <v-spacer></v-spacer>
            <v-btn>
              <router-link to="/Home">Home</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/Savory">Savory</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/Candies">Candies</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/Juice">Juice</router-link>
            </v-btn>
    </v-app-bar>
</template>
