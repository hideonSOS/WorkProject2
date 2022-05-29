const DrawGraph2=(dataon,datalist)=> {
    
    dict={
        type: 'bar',
        data: {
            // labels: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
            labels:dataon['name'],
            datasets: [{
                label: "得点率",
                // data: [127094745, 127041812, 126918546, 126748506, 126555078, 126146099],
                data:dataon[datalist],
                // data:[0 for i in range]
                borderColor: 'lime',
                Width:1,
                backgroundColor:'rgba(0,255,120,0.5)',
                borderWidth:0.3,
            }],
        },
        options: {
            responsive: false,
            legend:{display:false},
            scales:{
                xAxes:[{
                    barPercentage: 0.4,
                    scaleLabel:{
                        display:true,
                        labelString:'横軸ラベル',
                        fontColor:'cyan',
                        fontSize:16,
                    },
                    gridLines: {                   // 補助線
                        color: "rgba(255, 0, 0, 0.2)", // 補助線の色
                    },
                    ticks: {                      // 目盛り
                        fontColor: "red",             // 目盛りの色
                        fontSize: 14                  // フォントサイズ
                    }   
                }],
                yAxes: [                           // Ｙ軸設定
                {
                    scaleLabel: {                  // 軸ラベル
                        display: true,                 // 表示の有無
                        labelString: '縦軸ラベル',     // ラベル
                        fontFamily: "sans-serif",
                        fontColor: "blue",             // 文字の色
                        fontFamily: "sans-serif",
                        fontSize: 16                   // フォントサイズ
                    },
                    gridLines: {                   // 補助線
                        color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                        zeroLineColor: "black"         // y=0（Ｘ軸の色）
                    },
                    ticks: {                       // 目盛り
                        min: 0,                        // 最小値
                        max: 25,                       // 最大値
                        stepSize: 5,                   // 軸間隔
                        fontColor: "blue",             // 目盛りの色
                        fontSize: 14                   // フォントサイズ
                    }
                }
            ]
            }
        }
    }
    return dict;
};

const TestDrawGraph=()=> {
    dict={
        //下に辞書
        
type: 'bar',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [0, 20, 40, 50]
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {

        scales: {
            y: {
                suggestedMax: 100
            },
            
        }
    }
        //↓に辞書


        //↑に辞書
    }
    return dict;
};
const ReturnColor = (datavalue,borderscore)=>{
    if (datavalue >= borderscore){
        color='rgba(0,255,255,0.3)'
    }
    else{
        color='rgba(100,100,100,0.3)'
    }
    return color
}




const DrawGraph3 = (dataon,datalist)=>{
    document.addEventListener('DOMContentLoaded', function() {

    var ctx1 = document.getElementById('bar').getContext('2d');
    dict = DrawGraph2(dataon,datalist);
    var chart = new Chart(ctx1,dict);
    
        document.getElementById('btn1').addEventListener('click',
            function(){
                chart.data.datasets[0].data = dataon['average'];
                chart.data.datasets[0].borderColor ='cyan';
                chart.data.datasets[0].backgroundColor = 'rgba(0,255,255,0.3)';
                chart.data.datasets[0].label = '２連対立';
                chart.update();
            
            })
        document.getElementById('btn2').addEventListener('click',
            function(){
                chart.data.datasets[0].data = dataon['oneave'];
                chart.data.datasets[0].label ='１着率';
                chart.data.datasets[0].borderColor ='lightgreen';
                chart.data.datasets[0].backgroundColor ='rgba(0,255,100,0.3)';
                chart.update();
                
            })

    });
}