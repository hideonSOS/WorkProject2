function DrawGraph() {
        
    const labelon = ['１着','２着','３着','４着','５着','６着'];
    const linecolor = 'orange';
    const linewidth=2;
    var dict = {
        //グラフの種類
            type: 'radar',
            //データの設定
            　data: {
                labels: labelon,
                datasets: [{
                label: '未入力',
                //グラフのデータ
                data:[0,0,0,0,0,0],
                // データライン
                borderColor: linecolor,
                borderWidth:linewidth,
                padding:1,
                boxHeight:100,
                innerWidth:50,

                }],
            },
            //オプションの設定
            options: {
            
                scales: {
                    r: {
                    //グラフの最小値・最大値
                    min: 0,
                    // max: 100,
                    // max:20,
                    //背景色
                    backgroundColor:'rgba(10,10,250,0.5)',
                    grid: {color: 'cyan'},
                    //アングルライン
                    angleLines: {color: 'cyan'},
                    //各項目のラベル
                    pointLabels: {
                        color:'white',
                    },

                    fullsize:false,
                    },
                    // xAxis:{fontSize:10}
                },
            }, 
        }
    return dict;
};

const DrawGraph2=(datas)=> {
        
    const labelon = ['１着','２着','３着','４着','５着','６着'];
    const linecolor = 'orange';
    

    const linewidth=2;
    var dict = {
        //グラフの種類
            type: 'radar',
            //データの設定
            data: {
                labels: labelon,
                datasets: [{
                label: datas['MotorNo'],
                //グラフのデータ
                data:[datas['One'],datas['Two'],datas['Three'],datas['Four'],datas['Five'],datas['Six']],
                // データライン
                borderColor: linecolor,
                borderWidth:linewidth,
                padding:1,
                boxHeight:100,
                innerWidth:50,

                }],
            },
            //オプションの設定
            options: {
            
                scales: {
                    r: {
                    //グラフの最小値・最大値
                    min: 0,
                    // max: 100,
                    // max:20,
                    //背景色
                    backgroundColor:'rgba(10,10,250,0.5)',
                    grid: {color: 'cyan'},
                    //アングルライン
                    angleLines: {color: 'cyan'},
                    //各項目のラベル
                    pointLabels: {
                        color:'white',
                    },

                    fullsize:false,
                    },
                    // xAxis:{fontSize:10}
                },
            }, 
        }
    return dict;
};


const SelectOn=(No)=>{
    if (No<10){alert(No+'号機はありません。');}
    else if (No>=10 && No<40){
        NN=No-10;
        return MotorDict[NN]
    }
    else if (No>=40 && No<50){alert(No+'号機はありません。');}
    
    else if (No >=50 && No<=84){
        NN=No-20;
        return MotorDict[NN]
    }
    else if (No>84){alert(No+'号機はありません。');}
}








const OutputData = (IDs,BTN,INP)=>{
    document.addEventListener('DOMContentLoaded', function() {
      //描画
      var ctx1 = document.getElementById(IDs).getContext('2d');
      // var SelectedData = SelectOn(12);
      dict = DrawGraph();
      var chart = new Chart(ctx1,dict);
      //クリックイベント
        document.getElementById(BTN).addEventListener('click',
            function(){
                const InputValue = document.getElementById(INP).value;
                const SelectedData=SelectOn(InputValue);
                chart.data.datasets[0].data=[SelectedData.One,SelectedData.Two,SelectedData.Three,SelectedData.Four,SelectedData.Five,SelectedData.Six];
                chart.data.datasets[0].label = SelectedData.MotorNo+'号機';
                console.log('chart.data >>> ',typeof(chart.data));
                console.log(chart.data.datasets);
                console.log('datasets[0] >>> ' ,chart.data.datasets[0]);
                console.log('options >>> ' ,chart.options);
                chart.update();
            })

    });
}