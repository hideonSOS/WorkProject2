function DrawGraph(datas,no) {
        
    const labelon = ['１着','２着','３着','４着','５着','６着'];
    const linecolor = 'orange';
    dataon = datas[no]
    console.log(dataon)
    const linewidth=2;
    var dict = {
        //グラフの種類
            type: 'radar',
            //データの設定
            　data: {
                labels: labelon,
                datasets: [{
                label: no,
                //グラフのデータ
                data:[dataon['One'],dataon['Two'],dataon['Three'],dataon['Four'],dataon['Five'],dataon['Six']],
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
    
    else if (No >=50 && No<=65){
        NN=No-20;
        return MotorDict[NN]
    }
    else if (No>65){alert(No+'号機はありません。');}
}
