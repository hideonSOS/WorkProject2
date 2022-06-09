function DrawGraph(MotorNo,lista) {
        
    const labelon = ['逃げ','まくり','差し','まくり差し','抜き','恵まれ'];
    const linecolor = 'orange';
    const linewidth=2;
    var dict = {
        //グラフの種類
            type: 'radar',
            //データの設定
            　data: {
                labels: labelon,
                datasets: [{
                label: 'モーター >>> '+ MotorNo +'号機',
                data:lista,
                fontColor:'white',
                backgroundColor: "rgba(255,0,0,0.5)",
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
                        min: 0,
                        backgroundColor:'rgba(10,10,250,0.5)',
                        grid: {color: 'cyan'},
                        angleLines: {color: 'cyan'},
                        pointLabels: {color:'white'},
                        fullsize:false,
                        },
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
                // chart.data.datasets[0].data=[SelectedData.One,SelectedData.Two,SelectedData.Three,SelectedData.Four,SelectedData.Five,SelectedData.Six];
                // chart.data.datasets[0].label = SelectedData.MotorNo+'号機';
                // chart.update();
                // alert(InputValue)
            })

    });
}
const OutputData2 = (IDs,lista,MotorOn)=>{
    document.addEventListener('DOMContentLoaded', function() {
    var ctx1 = document.getElementById(IDs).getContext('2d');
    dict = DrawGraph(MotorOn,lista);
    var chart = new Chart(ctx1,dict);

    });
}

const SelectOn2=(No)=>{
    if (No<10){alert(No+'号機はありません。');}
    else if (No>=10 && No<40){
        NN=No-10;
        return No
    }
    else if (No>=40 && No<50){alert(No+'号機はありません。');}
    
    else if (No >=50 && No<=84){
        NN=No-20;
        return No
    }
    else if (No>84){alert(No+'号機はありません。');}
}


const App = {
    data(){
        return{
            twoave:'testvalue2'
        }
    },
}
app = Vue.createApp(App)
app.mount('#app2')
