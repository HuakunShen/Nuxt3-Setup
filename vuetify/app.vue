<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" class="pa-2" sm="4">
          <v-alert type="success">Vuetify Alert</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
