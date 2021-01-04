<template>
<div class="text-center mt-4 mb-3">
    <h1 class="mb-2 mb-3">Welcome to Your dashboard</h1>
    <p>Add edit delete all the users, products, sections, orders </p>
    <p>Track evrything in youe website from here</p>

</div>

</template>

<script>
import Info from './dashboard/InfoBox.vue';
import InfoChart from './dashboard/InfoBoxChart.vue';
import InfoChartTwo from './dashboard/InfoBoxChart2.vue';
import RealTime from './dashboard/RealTime.vue';
import Traffic from './dashboard/Traffic.vue';
import EarningStats from './dashboard/EarningStats.vue';
import Download from './dashboard/Download.vue';
import Revenue from './dashboard/Revenue.vue';


export default{
    name: 'dashboard',
    components: {
        Info,
        InfoChart,
        InfoChartTwo,
        RealTime,
        Traffic,
        EarningStats,
        Download,
        Revenue
    }
}


</script>

<style>

</style>