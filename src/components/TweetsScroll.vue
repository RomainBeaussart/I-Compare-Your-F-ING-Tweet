<template>
    <div class="TwitterScroll">
    <v-container>
      <v-layout
      column
      >
      <li 
        v-for="(tweet,index) in Tweets"
        v-bind:key="index"
        >
            <v-flex>
            <twitter-card v-bind:tweet="tweet" v-bind:id="index" v-bind:type="type" />
            </v-flex>
      </li>
      </v-layout>
    </v-container>
  </div>    
</template>

<script>
import TwitterCard from './TwitterCard'

export default {
    components: {
        TwitterCard
    },
    props: ['Tweets', 'type'],
    methods: {
        onScroll () {

        }
    }
}
</script>

<style lang="scss">
  .TwitterScroll{
    color:#FFF;
  }
</style>
