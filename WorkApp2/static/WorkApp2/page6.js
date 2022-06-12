let GetBarWidth=()=>{
    if (document.documentElement.clientWidth>1500){
        wi = {barwidth:15,fontsize:18}
    }
    else if (document.documentElement.clientWidth>1000){
        wi = {barwidth:8,fontsize:12}
    }
    else if (document.documentElement.clientWidth<999){
        wi = {barwidth:5,fontsize:7}
    }
    return wi
}

wiwi = GetBarWidth();
const DrawGraph2=(dataon,datalist,type)=> {

    dict={
        type: type,
        data: {
            labels:dataon['no'],
            datasets: [{
                label:'MotorNo',
                data:dataon['oneave'],
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
                text: ' < ボートレース住之江 ボート１着率 一覧 > ' ,               //ラベル
            },
            scales:{
                xAxes:[{
                    // barPercentage: 10,     
                    barThickness:wiwi['barwidth'], 
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
                        fontSize: wiwi['fontsize'],
                    }   
                }],
                yAxes: [                           // Ｙ軸設定
                {
                    // barPercentage: 1,     
                    barThickness:wiwi['barwidth'], 
                    // categoryPercentage: 1,
                    scaleLabel: {                  // 軸ラベル               // 表示の有無
                        fontColor: "yellow",             // 文字の色
                        fontFamily: "sans-serif",
                        fontSize: wiwi['fontsize']                   // フォントサイズ
                    },
                    gridLines: {                   // 補助線
                        color: "grey", // 補助線の色
                        lineWidth:0.5,
                        // zeroLineColor: "black"         // y=0（Ｘ軸の色）
                    },
                    ticks: {                       // 目盛り
                        fontColor: "yellow",             // 目盛りの色
                        fontSize: wiwi['fontsize'],
                                          // フォントサイズ
                    }
                }
            ]
            }
        }
    }
    return dict;
};



const DrawGraph3 = (dataon,datalist)=>{
    console.log(dataon,datalist)
    
    $(document).ready(()=>{

    var ctx1 = document.getElementById('bar').getContext('2d');
    dict = DrawGraph2(dataon,datalist,'bar');
    var chart = new Chart(ctx1,dict);

    
    $(()=>{
        $('#btn1').click(()=>{
            chart.data.datasets[0].data = BoatDict['oneave'];
            chart.data.datasets[0].borderColor ='cyan';
            chart.data.datasets[0].backgroundColor = 'rgba(0,255,255,0.3)';
            chart.options.title.text = '< ボートレース住之江 ボート１着率 一覧 >';
            chart.update();
            console.log(BoatDict['threeave'])
        })
        $('#btn2').click(()=>{
            chart.data.datasets[0].data = BoatDict['twoave'];
            chart.data.datasets[0].borderColor ='cyan';
            chart.data.datasets[0].backgroundColor = 'rgba(0,255,255,0.3)';
            chart.options.title.text = '< ボートレース住之江 ボート２連対率 一覧 >';
            chart.update();
            console.log(BoatDict['threeave'])
        })
        $('#btn3').click(()=>{
            chart.data.datasets[0].data = BoatDict['threeave'];
            chart.data.datasets[0].borderColor ='cyan';
            chart.data.datasets[0].backgroundColor = 'rgba(0,255,255,0.3)';
            chart.options.title.text = '< ボートレース住之江 ボート３連対率 一覧 >';
            chart.update();
            console.log(BoatDict['threeave'])
        })
    })
    })
}



    