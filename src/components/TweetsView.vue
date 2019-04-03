<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex md4>
                <chart />
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex md4>
                <tweets-scroll v-bind:Tweets="getTweets.bad" type="-1"/>
            </v-flex>
            <v-flex md4>
                <tweets-scroll v-bind:Tweets="getTweets.neutral" type="0"/>
            </v-flex>
            <v-flex md4>
                <tweets-scroll v-bind:Tweets="getTweets.good" type="1"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import TweetsScroll from './TweetsScroll'
import { mapGetters } from 'vuex'
import Chart from './Chart'

export default {
    components: {
        TweetsScroll,
        Chart
    },
    data: () => ({
        type: 0,
        tweets: {}
    }),
    methods: {
        
    },
    computed: {
        ...mapGetters([
            'getTweets'
        ])
    }
}
</script>

<style>

</style>
