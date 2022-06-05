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
// alert(GetWidth())

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
                fontSize: 24,    
                fontColor:'yellow',              //フォントサイズ
                text: '< 得 点 率 一 覧 >' ,               //ラベル
            },
            scales:{
                xAxes:[{
                    // barPercentage: 0.8,           //棒グラフ幅
                    // categoryPercentage: 0.5,      //棒グラフ幅
                    barThickness:GetBarWidth(), 
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
                        // max:12,  
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
        maintainAspectRatio:false,
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
                const border = document.getElementById('border').value
                
                chart.data.datasets[0].label= "総 得 点 >>> ";
                chart.data.datasets[0].data = dataon['point'];
                chart.data.datasets[0].borderColor ='orange';
                chart.data.datasets[0].backgroundColor = 'rgba(255,0,255,0.3)';
                chart.options.title.text='総 得 点 ';
                chart.update();
                
            })
        document.getElementById('btn2').addEventListener('click',
            function(){
                chart.data.datasets[0].label= "総 得 率 >>> ";
                chart.data.datasets[0].data = dataon['average'];
                chart.data.datasets[0].borderColor ='lightgreen';
                chart.data.datasets[0].backgroundColor ='cyan';
                chart.options.title.text='得 点 率'
                chart.update();
                
            })
        document.getElementById('btn3').addEventListener('click',()=>{
            const BorderScore = document.getElementById('border').value;
            const li = []
            for (const i of dataon['runcount']){
                li.push(parseFloat((Number(i)+1)*parseFloat(BorderScore)))
            }
            lion=[]
            for (i=0; i<li.length; i++){
                lion.push(li[i]-dataon['point'][i])
            }
            chart.data.datasets[0].label= "１ 走 必 要 得 点 >>> ";
            chart.data.datasets[0].data = lion;
            chart.data.datasets[0].borderColor ='lightgreen';
            chart.data.datasets[0].backgroundColor ='orange';
            chart.options.title.text='必要得点'
            chart.update();

            
        })
        document.getElementById('btn4').addEventListener('click',()=>{
            const BorderScore = document.getElementById('border').value;
            const li = []
            for (const i of dataon['runcount']){
                li.push(parseFloat((Number(i)+2)*parseFloat(BorderScore)))
            }
            lion=[]
            for (i=0; i<li.length; i++){
                lion.push(li[i]-dataon['point'][i])
            }
            chart.data.datasets[0].label= "２ 走 必 要 得 点 >>> ";
            chart.data.datasets[0].data = lion;
            chart.data.datasets[0].borderColor ='lightgreen';
            chart.data.datasets[0].backgroundColor ='lightgreen';
            chart.options.title.text='必要得点'
            chart.update();

        })
        document.getElementById('btn5').addEventListener('click', ()=>{
            alert('btn5.click')
        })
    });
}

