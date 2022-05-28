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
            }],
        },
        options: {
            responsive: false,
        }
    }
    return dict;
};

const TestDrawGraph=()=> {
    dict={
        type: 'bar',
        data: {
            labels: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
            // labels:dataon['label'],
            datasets: [{
                label: "日本の人口推移",
                data: [127094745, 127041812, 126918546, 126748506, 126555078, 126146099],
                // data:dataon['twoave'],
                borderColor: 'cyan',
                backgroundColor:'rgba(0,255,255,0.3)',
                borderWidth:0.3,
            }],
        },
        options: {
            responsive: false,
        }
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