<template>
    <div class="toolbar">
        <a href="http://www.lawifi.fr"><center>ICYFT</center></a>
    </div>
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

    $yellow: #FFD300;
    $grey: #95a5a6;

    a{
        text-decoration: none;
    }

    .toolbar{
        color: $yellow;
        font-family: 'BebasNeue';
        background: #FFF;
        font-size: 5.5em;
        width: 100%;
        height: 100%;
        font-weight: bold;
        

        center{
            transform: rotate(10deg);
            transition: 0.1s;
            color: $yellow;

            &:hover{
                transform: rotate(-10deg);
            }
        }
    }
    .v-toolbar__content {
        padding: 0px !important;
    }

    .v-toolbar{
        box-shadow: 0px 0px 0px rgba(0,0,0,0) !important;
    }
</style>
