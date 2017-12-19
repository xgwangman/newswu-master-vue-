<template>
    <div class="pro-echarts has-header">
        <div class="charts">
            <div id="myChart" :style="{width: '400px', height: '400px'}"></div> 
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name: 'pro-echarts',
    data () {
        return {

        }
    },
    mounted() {
        let chartBox = document.getElementsByClassName('charts')[0];
        let myChart = document.getElementById('myChart');

        // 用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
        function resizeCharts () {
            myChart.style.width = chartBox.style.width + 'px';
            myChart.style.height = chartBox.style.height + 'px';
        }
        // 设置容器高宽
        resizeCharts();

        // 指定图表的配置项和数据
        var option = {
        title: {
            text: '动态数据',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['最新成交价', '预购队列']
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: (function (){
                    var now = new Date();
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })()
            },
            {
                type: 'category',
                boundaryGap: true,
                data: (function (){
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(len + 1);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '价格',
                max: 20,
                min: 0,
                boundaryGap: [0.2, 0.2]
            },
            {
                type: 'value',
                scale: true,
                name: '预购量',
                max: 1200,
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [
            {
                name:'预购队列',
                type:'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data:(function (){
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(Math.round(Math.random() * 1000));
                    }
                    return res;
                })()
            },
            {
                name:'最新成交价',
                type:'line',
                data:(function (){
                    var res = [];
                    var len = 0;
                    while (len < 10) {
                        res.push((Math.random()*10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };
    app.count = 11;
    setInterval(function (){
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);
    }, 2100);

    
        let mainChart = echarts.init(myChart);
        mainChart.setOption(option);
    }
} 
</script>

<style lang="scss" scoped>
    .charts {
        margin-left: 10px;
    }
</style>