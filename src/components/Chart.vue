<template>
    <div id="chart">
            <apexchart width="380" type="pie" :options="chartOptions" :series="series"  />
            <img src="./assets/img/drink.png" height="300px"/>
    </div>
</template>

<script>    
import ApexCharts from 'vue-apexcharts'
import { mapGetters } from 'vuex'

export default {
    
    components: {
        apexchart: ApexCharts,
    },

    data: () => ({
        chartOptions: {
            labels: ['Negative', 'Neutral', 'Positive'],
            colors: ['#DB3340','#28ABE3', '#1FDA9A' ]
        },
        series: [0, 0, 0]
    }),
    created() {
        this.fillChart()
    },
    methods: {
        fillChart() {
            const proportions = this.getProportions
            //Negative tweets
            this.series[0] = proportions.bad
            //Neutral tweets
            this.series[1] = proportions.neutral
            //Positive tweets
            this.series[2] = proportions.good
        }
    },
    computed: {
        ...mapGetters([
            'getProportions'
        ])
    }

} 

</script>
    
<style lang="scss">
    img{
        margin-top: -220px;
        margin-left: 120px;
    }

    .apexchart{
        margin-right: auto;
        margin-left: auto;
    }
</style>