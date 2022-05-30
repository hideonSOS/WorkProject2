const DrawGraph=(dataon,datalist)=> {
    dict={
        type: 'bar',
        data: {
            labels:dataon['label'],
            datasets: [{
                label: "得点率",
                data:dataon[datalist],
                borderColor: 'lime',
                // Width:1,
                backgroundColor:'rgba(0,255,150,0.7)',
                hoverBackgroundColor: 'yellow',
                borderWidth:0.2,
            }],
        },
        options: {
            responsive: true,
            legend: {                          //凡例設定
                display: false                 //表示設定
            },
            title: {                           //タイトル設定
                display: true,                 //表示設定
                fontSize: 8,    
                fontColor:'yellow',              //フォントサイズ
                text: '< 得 点 率 一 覧 >' ,               //ラベル
            },
            scales:{
                xAxes:[{
                    // barPercentage: 0.8,           //棒グラフ幅
                    categoryPercentage: 0.5,      //棒グラフ幅
                    scaleLabel:{
                        fontColor:'yellow',
                    },
                    gridLines: {                  
                        color: "grey", 
                        lineWidth:0.5,
                    },
                    ticks: {
                        autoSkip:false,                     
                        fontColor: "yellow",    
                        fontSize:8,
                    }   
                }],
                yAxes: [                     
                {
                    scaleLabel: {                  // 軸ラベル
                        fontColor: "yellow",             // 文字の色
                    },
                    gridLines: {                   // 補助線
                        color: "grey", // 補助線の
                        lineWidth:0.5,
                    },
                    ticks: {                       // 目盛り
                        // min: 13,                        // 最小値
                        max:12,  
                                  // 軸間隔
                        fontColor: "yellow",             // 目盛りの色
                        fontSize: 18              // フォントサイズ
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


const DrawGraphonLoad = (dataon,datalist)=>{
    document.addEventListener('DOMContentLoaded', function() {

    var ctx1 = document.getElementById('bar').getContext('2d');
    dict = DrawGraph(dataon,datalist);
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