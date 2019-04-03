<template>
    <v-container class="result">
        <div class="br" />
            <center>
                <auto-complete/>
                <v-btn @click="search">Go</v-btn>
            </center>

        <v-container v-if="loading">
            <v-layout align-center row wrap>
                <v-flex class="text-xs-center" xs12>
                    <span class="headline font-weight-bold">Monkey is saying: "I'm fetching your tweets..."</span>
                </v-flex>
                <v-flex align-center xs12>
                    <center>
                    <v-img 
                    style="text-align: center;"
                    max-height="500"
                    max-width="500"
                    src="https://i.pinimg.com/originals/6f/56/da/6f56da52157077b7fea01fccaf2f0ff6.gif" 
                    />
                    </center>
                </v-flex>
            </v-layout> 
        </v-container>
    
        <div v-else-if="response != null">
            <v-divider></v-divider>
            <tweets-view />
        </div>


    </v-container>
</template>

<script>
import TweetsView from './TweetsView'
import AutoComplete from './AutoComplete'
import axios from 'axios'
import {mapMutations, mapGetters} from 'vuex'

export default {
    components: {
        TweetsView,
        AutoComplete
    },
    data: () => ({
        items: [],
        chips: null,
        apiBaseUrl: 'https://eb7tah16ck.execute-api.eu-west-3.amazonaws.com/prod/tweets?count=100&q=lang:fr%20',
        response: null,
        error: false,
        error_msg: null,
        loading: false
    }),
    computed: {
        apiUrl: function() {
            return this.apiBaseUrl + this.getSearchWords
        },
        ...mapGetters([
            'getSearchWords'
        ])
    },
    methods: {
        search () {
            this.loading = true
            axios.get(this.apiUrl).then(res => {
                this.response = res
                this.setTweets(this.response.data.data.statuses)
                this.loading = false
                })
                .catch(err => {
                    this.error = true
                    this.error_msg = err
                    this.loading = false
                })
        },
        ...mapMutations([
            'setTweets'
        ])
    }
}
</script>

<style lang="scss">

.container{
        padding: 0px !important;
    }

    $yellow: #FFD300;
    $grey: #95a5a6;

    .result{
        height: 80%;
        background: #FFF;
        color: $yellow;
        max-width: 100%;

        .br {
            background: url(./assets/img/honeybrclr.png) repeat-x;
            background-size: auto 100%;
            height: 225px;
            transition: 0.3s;
            margin-bottom: 100px;
        }

        .v-btn{
            background-color: $yellow !important;
            border-radius: 30px;
            color: #FFF;
            font-weight: bold;
            padding:0px 100px;
        }

        .tags{
            width: 60%;
            margin-right: auto;
            margin-left: auto;

            input{
                padding: 20px !important;
            }

            span{
                color:#FFF;
                background-color: $yellow;
                font-weight: bold;
                font-size: 20px;
                padding: 5px;
            }

            .v-icon{
                visibility: hidden;
            }

            .v-input__slot{
                border: 5px solid $yellow;
                border-radius: 100px !important;
            }
        }
    }
</style>
