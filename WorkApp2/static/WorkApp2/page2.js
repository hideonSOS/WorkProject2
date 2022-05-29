const DrawGraph2=(dataon,datalist)=> {
    
    dict={
        type: 'bar',
        data: {
            // labels: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
            labels:dataon['no'],
            datasets: [{
                label: "モーター性能",
                // data: [127094745, 127041812, 126918546, 126748506, 126555078, 126146099],
                data:dataon[datalist],
                // data:[0 for i in range]
                borderColor: 'cyan',
                backgroundColor:'rgba(0,255,255,0.3)',
                borderWidth:0.3,
                hoverBackgroundColor: 'cyan',
            }],
        },
        options: {
            responsive: false,
            legend: {                          //凡例設定
                display: false                 //表示設定
            },
            title: {                           //タイトル設定
                display: true,                 //表示設定
                fontSize: 18,    
                fontColor:'yellow',              //フォントサイズ
                text: ' < ボートレース住之江 モーター２連対率 一覧 > ' ,               //ラベル
            },
            scales:{
                xAxes:[{
                    barPercentage: 0.8,           //棒グラフ幅
                    categoryPercentage: 0.5,
                    scaleLabel:{
                        fontColor:'cyan',
                    },
                    gridLines: {                   // 補助線
                        color: "grey",
                        lineWidth:0.5, // 補助線の色
                    },
                    ticks: {                      // 目盛り
                        fontColor: "yellow",             // 目盛りの色
                        fontSize: 12                  // フォントサイズ
                    }   
                }],
                yAxes: [                           // Ｙ軸設定
                {
                    scaleLabel: {                  // 軸ラベル               // 表示の有無
                        // labelString: '縦軸ラベル',     // ラベル
                        // fontFamily: "sans-serif",
                        fontColor: "yellow",             // 文字の色
                        fontFamily: "sans-serif",
                        fontSize: 12                   // フォントサイズ
                    },
                    gridLines: {                   // 補助線
                        color: "grey", // 補助線の色
                        lineWidth:0.5,
                        // zeroLineColor: "black"         // y=0（Ｘ軸の色）
                    },
                    ticks: {                       // 目盛り
                        fontColor: "yellow",             // 目盛りの色
                        fontSize: 12                   // フォントサイズ
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


const DrawGraph3 = (dataon,datalist)=>{
    document.addEventListener('DOMContentLoaded', function() {

    var ctx1 = document.getElementById('bar').getContext('2d');
    dict = DrawGraph2(dataon,datalist);
    var chart = new Chart(ctx1,dict);
    
        document.getElementById('btn1').addEventListener('click',
            function(){
                chart.data.datasets[0].data = dataon['twoave'];
                chart.data.datasets[0].borderColor ='cyan';
                chart.data.datasets[0].backgroundColor = 'rgba(0,255,255,0.3)';
                chart.options.title.text = '< ボートレース住之江 モーター２連対率 一覧 >';
                chart.update();
            
            })
        document.getElementById('btn2').addEventListener('click',
            function(){
                chart.data.datasets[0].data = dataon['oneave'];
                chart.options.title.text ='< ボートレース住之江 モーター勝率 一覧 >';
                chart.data.datasets[0].borderColor ='lightgreen';
                chart.data.datasets[0].backgroundColor ='rgba(0,255,100,0.3)';
                chart.update();
                
            })

    });
}