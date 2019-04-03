<template>
    <v-container class="header">
        <div class="br" />
        <img src="./assets/img/lemon.png" /> <br />
        <h1>I Compare Your</h1>
        <h1>F***ing Tweet</h1>
    </v-container>

</template>

<script>
export default {

}
</script>

<style lang="scss">

    @font-face {
        font-family: "BebasNeue";
        src: url(./assets/font/BebasNeue-Regular.woff);
    }

    .container{
        padding: 0px !important;
    }

    .application{
        background: #FFF !important;
    }

    $yellow: #FFD300;
    $grey: #95a5a6;

    .header{
        background: $yellow;
        color: #FFF;
        max-width: 100%;
        height: 80%;
        max-height: 1000px;

        img{
            margin-right: auto;
            margin-left: auto;
            display: block;
            width: 20%;
            margin-top:-150px;
            transition: 0.3s;
            animation: rotate_lemone 5s linear infinite;
        }

        h1{
            font-family: 'BebasNeue';
            text-align: center;
            font-size: 10em;
            margin-top: -90px;
            text-shadow: 5px 5px 0px #FFFFFF,
            5px -5px 0px #FFFFFF,
            -5px 5px 0px #FFFFFF,
            -5px -5px 0px #FFFFFF,
            0px 5px 0px #FFFFFF,
            0px -5px 0px #FFFFFF,
            -5px 0px 0px #FFFFFF,
            5px 0px 0px #FFFFFF;
            color: $yellow;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
            transition: 0.3s;

            &:hover{
                color: #FFF;
                text-shadow: 0px 0px 0px $yellow,
            }
        }

        .br {
            background: url(./assets/img/honeybr.png) repeat-x;
            background-size: auto 100%;
            height: 225px;
            transition: 0.3s;
            margin-bottom: 100px;
            margin-top:0px;

            &:hover{
                margin-top: 100px;
                margin-bottom: 0px;
            }
        }
    }
    
    @keyframes rotate_lemone {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(180deg);}
    }
</style>
