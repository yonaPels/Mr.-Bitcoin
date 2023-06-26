<template>
    <section class="chart">
        <h1>Bitcoin Stats</h1>
        <div class="chart-btns">
            <button @click="onShowPriceHistory">Price History</button>
            <button @click="onShowBlockSize">Block Size</button>
        </div>
        
        <div v-if="priceHistory && avgBlockSize" class="chart-container">
            <div v-if="showPriceHistory" class="container"><BarChart :chartData="priceHistoryData" /></div>
            <div v-if="showAvgBlockSizeData" class="container"><BarChart :chartData="avgBlockSizeData" /></div>
        </div>
    </section>
</template>

<script >
import BarChart from "../cmps/BarChart.vue";
import { bitcoinService } from '../services/bitcoin.service'
export default{
    data(){
        return {
            priceHistory: null,
            avgBlockSize: null,
            showPriceHistory: true,
            showAvgBlockSizeData: null
        }
    },
    async created() {
        this.priceHistory = await bitcoinService.getMarketPriceHistory();
        this.avgBlockSize = await bitcoinService.getAvgBlockSize();
    },
    components: { BarChart },
    computed: {
        priceHistoryData() {
            return {
                labels: this.priceHistory.values.map((dataSample) => {
                    let date = dataSample.x;
                    date = new Date(date * 1000);
                    return date.toISOString().split("T")[0];
                    // `${date.getDate() + 1}.${date.getMonth() + 1}`
                }),
                datasets: [{
                    label: "Average USD market price across major bitcoin exchanges.",
                    backgroundColor: "#01BD7E",
                    data: this.priceHistory.values.map((dataSample) => dataSample.y),
                },],
            };
        },
        avgBlockSizeData() {
            return {
                labels: this.avgBlockSize.values.map((dataSample) => {
                    let date = dataSample.x;
                    date = new Date(date * 1000);
                    return date.toISOString().split("T")[0];
                    }
                ),
                datasets: [
                {
                    label: "The average block size in MB.",
                    backgroundColor: "#01BD7E",
                    data: this.avgBlockSize.values.map((dataSample) => dataSample.y),
                },],
            }
        },
    },
    methods:{
        onShowPriceHistory(){
            this.showAvgBlockSizeData=true,
            this.showPriceHistory=false
        },
        onShowBlockSize(){
            this.showAvgBlockSizeData=false,
            this.showPriceHistory=true
        }
    }
}
</script>

<style lang="scss">
.container{
    width: 100vh;
}

.chart-btns{
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 20px;
}

h1{
    text-align: center;
}

.chart{
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
}

.chart-container{
    display: flex;
    justify-content: space-around;
}
</style>