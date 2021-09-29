import {kqData} from "../api/mapApi"
import "echartslayer"
import EchartsLayer from '../../node_modules/echartslayer/lib/EchartsLayer'
import {strMapToObj} from "./ObjUtil"
export const createEhartLayer=()=>{
    kqData().then(res=>{
        if(res.data.features&&res.data.features.length){
            let resData=res.data.features
            let arrData=[];
            let mapData=new Map()
            for(let itm of resData){
                let geo=JSON.parse(itm.geowkt)
                arrData.push({
                    name:itm.attributes.STATIONNAME,
                    value:itm.attributes.RN
                })
                mapData.set(itm.attributes.STATIONNAME,geo.coordinates)
            }
            let geoCoordMap=strMapToObj(mapData)
            let convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            let option = {
                title: {
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x: 'right',
                    data: ['pm2.5'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                GLMap: {

                },
                series: [{
                    name: '空气质量',
                    type: 'scatter',
                    coordinateSystem: 'GLMap',
                    data: convertData(arrData),
                    symbolSize: function (val) {
                        return val[2] / 30;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                }, {
                    name: '空气质量',
                    type: 'effectScatter',
                    coordinateSystem: 'GLMap',
                    data: convertData(arrData.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 6)),
                    symbolSize: function (val) {
                        return val[2] / 30;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }]
            };
       
     
            var echartslayer = new EchartsLayer(window.$mapbox);
            echartslayer.chart.setOption(option);

            //echartslayer.remove();
        }
    })

}