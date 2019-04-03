<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4>
      <v-menu
        v-model="beginMenu"
        :close-on-content-click="true"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="beginDate"
            label="From"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="beginDate" @input="beginMenu = false"></v-date-picker>
      </v-menu>
    </v-flex>

    <v-spacer></v-spacer>

    <v-flex xs12 sm6 md4>
      <v-menu
        v-model="endMenu"
        :close-on-content-click="true"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="endDate"
            label="To"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="endDate" @input="endMenu = false"></v-date-picker>
      </v-menu>
    </v-flex>
    
    <v-flex>
      <v-btn @click="testPckr">Test</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      beginDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      beginMenu: false,
      endMenu: false,
      modal: false
    }),

    methods: {
      testPckr () {
        console.log("BeginDate: " + this.beginDate)
        console.log("BeginDate: " + this.endDate)
      }
    }
  }
</script>