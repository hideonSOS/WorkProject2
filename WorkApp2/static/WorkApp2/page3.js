const DrawGrapha=(label,dataon,colorlist)=> {
        
    var dict = {
            type: 'bar',
            data: {
                labels: label,
                datasets: [{
                label: '得点率一覧',
                data:dataon,
                borderColor: 'cyan',
                // backgroundColor:'rgba(0,255,255,0.3)',
                backgroundColor:colorlist,
                borderWidth:0.3,
                hoverBackgroundColor:'red',
                hoverBorderColor:'white',
                boverBorderWidth:5,
                barPercentage:0.8,
                // boxHeight:500,
                // innerWidth:50,

                }],
            },
            //オプションの設定
            options: {
               
                indexAxis: 'x',
                plugins: {
                    legend: {labels: {
                        fontColor:'white',
                        font: {
                            size: 25
                        }
                    }}
                },
            }
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

