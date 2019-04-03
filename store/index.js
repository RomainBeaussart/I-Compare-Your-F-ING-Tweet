import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const sortTweets = function(tweets) {
    const sentiment = require('sentiment-french')
    var result = {
        good: [],
        neutral: [],
        bad: []
    }
    for(var tw of tweets){
        var score = sentiment(tw.full_text).comparative
        if(score > 0) {
            result.good.push(tw)
        } else if(score < 0) {
            result.bad.push(tw) 
        } else {
            result.neutral.push(tw)
        }
    }
    return result
}

export default new Vuex.Store({
    state: {
        tweets: [],
        key_words: ""
    },
    mutations: {
        setTweets: (state, tweets) => state.tweets = tweets,
        setSearchWords: (state, searchphrase) => state.key_words = searchphrase
    },
    getters: {
        getProportions: state => {
            const numberOfTweets = state.tweets.length
            const sortedTweets = sortTweets(state.tweets)
            var proportions = {
                good: (sortedTweets.good.length/numberOfTweets)*100,
                neutral: (sortedTweets.neutral.length/numberOfTweets)*100,
                bad: (sortedTweets.bad.length/numberOfTweets)*100
            }
            return proportions
        },
        getTweets: function (state) {
            return sortTweets(state.tweets)
        },
        getSearchWords: state => state.key_words
    }
})