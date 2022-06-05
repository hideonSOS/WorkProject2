let GetBarWidth=()=>{
    if (document.documentElement.clientWidth>1500){
        wi = 15
    }
    else if (document.documentElement.clientWidth>1000){
        wi = 8
    }
    else if (document.documentElement.clientWidth<999){
        wi = 5
    }
    return wi
}
const DrawGraph2=(dataon,datalist,type)=> {
    dict={
        type: type,
        data: {
            labels:dataon['no'],
            datasets: [{
                label: "モーター性能",
                data:dataon[datalist],
                borderColor: 'cyan',
                backgroundColor:'rgba(0,255,255,0.3)',
                borderWidth:0.3,
                hoverBackgroundColor: 'cyan',
            }],
        },
        options: {
            maintainAspectRatio:false,
            legend: {                          //凡例設定
                display: false                 //表示設定
            },
            title: {                           //タイトル設定
                display: true,                 //表示設定
                fontSize: 14,    
                fontColor:'yellow',              //フォントサイズ
                text: ' < ボートレース住之江 モーター２連対率 一覧 > ' ,               //ラベル
            },
            scales:{
                xAxes:[{
                    // barPercentage: 10,     
                    barThickness:GetBarWidth(), 
                    // categoryPercentage: 10,
                    scaleLabel:{
                        fontColor:'yellow',
                    },
                    gridLines: {                   // 補助線
                        color: "grey",
                        lineWidth:0.5, // 補助線の色
                    },
                    ticks: {
                        autoSkip:false,                          // 目盛り
                        fontColor: "yellow",             // 目盛りの色
                        fontSize: 10,
                    }   
                }],
                yAxes: [                           // Ｙ軸設定
                {
                    // barPercentage: 1,     
                    barThickness:GetBarWidth(), 
                    // categoryPercentage: 1,
                    scaleLabel: {                  // 軸ラベル               // 表示の有無
                        fontColor: "yellow",             // 文字の色
                        fontFamily: "sans-serif",
                        fontSize: 10                   // フォントサイズ
                    },
                    gridLines: {                   // 補助線
                        color: "grey", // 補助線の色
                        lineWidth:0.5,
                        // zeroLineColor: "black"         // y=0（Ｘ軸の色）
                    },
                    ticks: {                       // 目盛り
                        fontColor: "yellow",             // 目盛りの色
                        fontSize: 10,
                                          // フォントサイズ
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
        type: 'horizontalBar',
            data: {
                datasets: [{
                    label: 'First dataset',
                    data: [30, 20, 40, 50]
                }],
                labels: ['January', 'February', 'March', 'April']
            },
            options: {
                indexAxis:'y',
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
    dict = DrawGraph2(dataon,datalist,'bar');
    var chart = new Chart(ctx1,dict);

    var ctx2 = document.getElementById('bartwo').getContext('2d');
    dict2 = DrawGraph2(dataon,datalist,'horizontalBar');
    var charton = new Chart(ctx2,dict2);
    
        document.getElementById('btn1').addEventListener('click',
            function(){
                chart.data.datasets[0].data = dataon['twoave'];
                chart.data.datasets[0].borderColor ='cyan';
                chart.data.datasets[0].backgroundColor = 'rgba(0,255,255,0.3)';
                chart.options.title.text = '< ボートレース住之江 モーター２連対率 一覧 >';
                chart.update();
                charton.data.datasets[0].data = dataon['twoave'];
                charton.data.datasets[0].borderColor ='cyan';
                charton.data.datasets[0].backgroundColor = 'rgba(0,255,255,0.3)';
                charton.options.title.text = '< ボートレース住之江 モーター２連対率 一覧 >';
                charton.update();
            
            })
        document.getElementById('btn2').addEventListener('click',
            function(){
                chart.data.datasets[0].data = dataon['oneave'];
                chart.options.title.text ='< ボートレース住之江 モーター勝率 一覧 >';
                chart.data.datasets[0].borderColor ='lightgreen';
                chart.data.datasets[0].backgroundColor ='rgba(255,100,100,0.3)';
                chart.update();
                charton.data.datasets[0].data = dataon['oneave'];
                charton.options.title.text ='< ボートレース住之江 モーター勝率 一覧 >';
                charton.data.datasets[0].borderColor ='lightgreen';
                charton.data.datasets[0].backgroundColor ='rgba(255,100,100,0.3)';
                charton.update();
                
            })
            
    });
}

