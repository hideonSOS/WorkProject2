

document.addEventListener('DOMContentLoaded', function() {

  var myData = [
    { labels: ["1月","2月","3月"], data: [4,5,9] },
    { labels: ["2000年","2001年","2002年"], data: [41,34,52] }
  ];
  var selectedIndex = 0;
  
  
  var ctx = document.getElementById("myRadarChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "radar",
    data:{
      labels: myData[selectedIndex].labels,
      datasets:[{
        data: myData[selectedIndex].data
      }]
    },
    options:{}
  });  
  
  
  document.getElementById("button")
          .addEventListener('click',
              function() {
                  selectedIndex = (selectedIndex+1) % 2;
                  chart.data.labels = myData[selectedIndex].labels;
                  chart.data.datasets[0].data = myData[selectedIndex].data;
                  chart.update();
              }
          );
});



---------------
const Button1 = document.getElementById('btn1');
     
        const ButtonPush = (btnobj)=>{
            
            btnobj.addEventListener('click',()=>{
                const InputValue = document.getElementById('inp1').value;
                var ctx1 = document.getElementById("myRadarChart").getContext('2d');
                const a = SelectOn(InputValue);

                console.log('input>>>',InputValue);
                console.log('a>>>',a);

                dict = DrawGraph2(a);
                try{var chart = new Chart(ctx1,dict);}
                catch(e){
                    console.log(chart.data.labels);
                    // myRadarChart.data.labels=['test','test','test','test','test','test'];
                    // myRadarChart.data.datasets[0].data[1,2,3,4,5,6];
                    // myRadarChart.update();
                }
            })
        }

        ButtonPush(Button1);