<template>
    <v-card
    class="mx-auto"
    v-bind:color="color"
    dark
    hover
    v-bind:href="getTweetUrlFromId(tweet.id_str)"
    max-width="450"
    >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">{{title}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      {{tweet.full_text}}
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-content>
          <v-list-tile-title>{{tweet.user.name}}</v-list-tile-title>
        </v-list-tile-content>

       
        
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    created() {
        if(this.type == -1){
            this.color = '#e74b3c'
            this.title = 'BAD ' + this.id
        } else if (this.type == 1){
            this.color = '#37cf78'
            this.title = 'GOOD ' + this.id
        } else if (this.type == 0){
            this.color = '#3578c9'
            this.title = 'NEUTRAL ' + this.id
        }
    },
    data: () => ({
        color: '#26c6da',
        title: null
    }),
    props: ['tweet', 'type', 'id'],
    methods: {
      getTweetUrlFromId (id) {
        const base_url = "https://twitter.com/user/status/"
        return base_url + id
      }
    }
}
</script>

<style lang="scss">


</style>
