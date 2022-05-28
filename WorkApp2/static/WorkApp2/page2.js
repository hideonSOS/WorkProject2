const DrawGraph2=(dataon)=> {
    
    dict={
        type: 'bar',
        data: {
            // labels: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年'],
            labels:dataon['no'],
            datasets: [{
                label: "日本の人口推移",
                // data: [127094745, 127041812, 126918546, 126748506, 126555078, 126146099],
                data:dataon['twoave'],
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