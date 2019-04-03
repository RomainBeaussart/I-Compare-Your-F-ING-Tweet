<template>
  <v-container>
  <v-card-text>
    <v-subheader class="pa-0">What do you want to search ?</v-subheader>
    <v-autocomplete
      v-model="fullSearch"
      :search-input.sync="search"
      :items="states"
      :label="`Search`"
      persistent-hint
      prepend-icon="mdi-city"
    ></v-autocomplete>
  </v-card-text>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'


export default {
  data() {
    return {
      search: "",
      fullSearch: "",
      autocompleteData: [],
      states: [],
      err_val: null
    };
  },
  methods: {
      async getAutocompleteData () {
        this.setSearchWords(this.search)
        this.$http.get('https://api.datamuse.com/words?sp='+this.search+'*')
        .then(result => {this.states = result.data.map(x => x.word)} ).catch(err => this.err_val = err)
    },
    ...mapMutations([
      'setSearchWords'
    ])
  },
  

 watch: {
   'search': 'getAutocompleteData' ,
   'fullSearch' : 'dee' 
 }

}

</script>
