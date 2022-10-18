// create bar chart
// create function to import api
function buildList_1(data1) {
            // console.log("Data1", data1);
            let list = data1;
            //end import api
            //create doughnut chart

            // const result = words.filter(word => word.length > 6);
            // console.log("From js", list)

            const total_label = [...new Set(list.map(x => x.system))];
            // console.log("Total label", total_label)
            // end process unique data

            // list data after filter
            let total_approved = list.map(
                function (index) { return index.Approved; });
            // console.log("approve_data", approve_data);
            // console.log("Total approve", total_approved);

            let total_reject = list.map(
                function (index) { return index.Reject; });
            // console.log("Total reject", total_reject)

            // end process list data 
            // if (bar) bar.destroy();
            var ctx = document.getElementById('bar').getContext('2d');
            if (Chart.getChart("bar")){

                Chart.getChart("bar").destroy();
      
              }
            
            var bar = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: total_label,
                    datasets: [{
                        label: 'Approved 👍',
                        data: total_approved,
                        backgroundColor: [
                            '#3ccc37',
                            '#3ccc37',
                            '#3ccc37',
                        ],
                        borderWidth: 1,
                        datalabels:{
                            // color: '#fff',
                            anchor: 'end',
                            align: 'end',
                        },
                    },
                    {
                        label: 'Reject 👎',
                        data: total_reject,
                        backgroundColor: [
                            '#eb3f3f',
                            '#eb3f3f',
                            '#eb3f3f',
                        ],
                        borderWidth: 1,
                        datalabels:{
                            // color: '#fff',
                            anchor: 'end',
                            align: 'end',
                        },
                    }]
                },
                options: {
                    categoryPercentage: 0.6,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }],
                        xAxes:{
                            ticks:{
                                font:{
                                    size:16
                                }
                            }
                        }
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        datalabels:{
                            display: function(context) {
                                return context.dataset.data[context.dataIndex] >= 1;
                            },
                            font:{
                                size: 16,
                            },
                            // color: '#000'
                        },
                        legend:{
                            position: 'bottom',
                            labels:{
                                usePointStyle: true,
                                pointStyle: 'circle',
                                padding: 20,
                                font:{
                                    size: 14
                                },
                            }
                        },
                    },
                    layout:{
                        padding:{
                            top: 30
                        }
                    },
                },
                plugins: [ChartDataLabels],
            });
        
            // console.log(bar.data.datasets[0].data)
            // console.log(bar.data.datasets[1].data)
            // function updateBarChart(){
            //     bar.data.datasets[0].data = 
            //     bar.update();
            // console.log(bar.data.datasets[0].data)
            // }
};
// end function and bar chart
function buildList_2(data1){
            // console.log("Data", data1);
            let list = data1;
            //end import api

            // console.log("From pie", list)
            let total_all = list.map(
                function (index) { return index.system; });
            // console.log("Total all", total_all);

            // console.log("From pie", list)
            let total_sys = list.map(
                function (index) { return index.Total; });
            // console.log("Total sys", total_sys);

            // if (doughnut) doughnut.destroy();
            var ctx2 = document.getElementById('doughnut').getContext('2d');
            if (Chart.getChart("doughnut")){

                Chart.getChart("doughnut").destroy();
      
              }
            var doughnut = new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: total_all,

                    datasets: [{
                        data: total_sys,
                        backgroundColor: [
                            '#EFCA08',
                            '#00a8ab',
                            '#eb603f'

                        ],
                        borderWidth: 1,
                        datalabels:{
                            color: '#fdfdfd',
                            // anchor: 'end',
                            // align:'end',
                            borderWidth: 1,
                            borderRadius: 5,
                            // backgroundColor: (context) => {
                            //     return context.dataset.backgroundColor
                            // },
                            font:{
                                weight: 'normal',
                                size: '16'
                            },
                            formatter: (value) => {
                                return value + ' items'
                            }
                        },
                    }]

                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins:{
                        datalabels:{
                            display: function(context) {
                                return context.dataset.data[context.dataIndex] >= 1;
                            },
                            font:{
                                size: 16,
                            },
                            // color: '#000'
                        },
                        tooltip:{
                            enabled: false
                        },
                        legend:{
                            position: 'bottom',
                            labels:{
                                usePointStyle: true,
                                pointStyle: 'circle',
                                padding: 15,
                                font:{
                                    size: 14
                                },
                            }
                        },
                    },
                },
                plugins: [ChartDataLabels],
            });
};
//
function count(data1){
            // let list = data1;
            // console.log(data1)
            let wait_count = data1.map(
                function (index) { return index.Wait; })
            // console.log("Count", wait_count.reduce((a, b) => a + b, 0));
            const waitcount = wait_count.reduce((a, b) => a + b, 0);
            document.getElementById("waitrequest").innerHTML = waitcount;
            let approved_count = data1.map(
                function (index) { return index.Approved; })
            const approvedcount = approved_count.reduce((a, b) => a + b, 0);
            document.getElementById("approvedrequest").innerHTML = approvedcount;
            let reject_count = data1.map(
                function (index) { return index.Reject; })
            const rejectcount = reject_count.reduce((a, b) => a + b, 0);
            document.getElementById("rejectrequest").innerHTML = rejectcount;
            document.getElementById("allrequest").innerHTML = waitcount + approvedcount + rejectcount;


            let valueDisplays1 = document.querySelectorAll(".number1");
            let interval1 = 300;
            valueDisplays1.forEach((valueDisplays1) => {
                let startValue = -1;
                let endValue = parseInt(valueDisplays1.getAttribute("allrequest")).innerHTML = waitcount + approvedcount + rejectcount;
                let duration = Math.floor(interval1 / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplays1.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });

            let valueDisplays2 = document.querySelectorAll(".number2");
            let interval2 = 300;
            valueDisplays2.forEach((valueDisplays2) => {
                let startValue = -1;
                let endValue = parseInt(valueDisplays2.getAttribute("approvedrequest")).innerHTML = approvedcount; //1
                let duration = Math.floor(interval2 / endValue);
                let counter = setInterval(function () {
                    startValue += 1; //approved : 2 = 1 + 1
                    valueDisplays2.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });

            let valueDisplays3 = document.querySelectorAll(".number3");
            let interval3 = 300;
            valueDisplays3.forEach((valueDisplays3) => {
                let startValue = -1;
                let endValue = parseInt(valueDisplays3.getAttribute("rejectrequest")).innerHTML = rejectcount;
                let duration = Math.floor(interval3 / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplays3.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });

            let valueDisplays4 = document.querySelectorAll(".number4");
            let interval4 = 300;
            valueDisplays4.forEach((valueDisplays4) => {
                let startValue = -1;
                let endValue = parseInt(valueDisplays4.getAttribute("waitrequest")).innerHTML = waitcount;
                let duration = Math.floor(interval4 / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplays4.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
};
// )
function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

function testt(status="today"){
    let url="http://localhost:8000/api/testRequest-list";
    fetch(url)
    .then((res) => res.json())
        .then(function (data1) {
            // console.log(data1)
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            const today_data = [];
            const week_data = [];
            const month_data = [];
            // console.log(data1.length)
            for (let i=0;i < data1.length;i++){
                if(getNumberOfDays(data1[i]['lastUpdate'],today)==0){
                        today_data.push(data1[i]);
                        week_data.push(data1[i]);
                        month_data.push(data1[i])
                }else if(getNumberOfDays(data1[i]['lastUpdate'],today)<=7){
                        week_data.push(data1[i]);
                        month_data.push(data1[i])
                }else if(getNumberOfDays(data1[i]['lastUpdate'],today)>=0){
                        month_data.push(data1[i])
                }
                }
            // console.log("Today data",today_data)
            // console.log(week_data)
            // console.log(month_data)
            const name_label = [... new Set(data1.map(data => data.system))]
            // console.log(name_label)
            var item =[];
            // console.log(item)
            // console.log(today_data[0]['system'])
            // console.log(name_label[0])
            if(status=='today'){
            for(let i=0;i<name_label.length;i++){
                let wait_count = 0
                let app_count = 0
                let rej_count = 0
                for(let j=0;j<today_data.length;j++){
                    if(today_data[j]['system']==name_label[i]){
                        if(today_data[j]['docStatus'].toLowerCase()=='wait approve'){
                            // console.log(name_label[i])
                            wait_count += 1;
                            // item[name_label[i]]['Wait'] +=1; //0= 0 + 1 
                        }else if(today_data[j]['docStatus'].toLowerCase()=='approved'){
                            app_count += 1;
                            // item[name_label[i]]['Approved'] +=1;
                        }else if(today_data[j]['docStatus'].toLowerCase()=='reject'){
                            rej_count += 1;
                            // item[name_label[i]]['Reject'] +=1;
                        }
                    }
                }
                var testttt = {system:name_label[i],Wait:wait_count,Approved:app_count,Reject:rej_count,Total:wait_count+app_count+rej_count};
                item[i] = testttt;
            }
        }else if(status=='weekly'){
            for(let i=0;i<name_label.length;i++){
                let wait_count = 0
                let app_count = 0
                let rej_count = 0
                for(let j=0;j<week_data.length;j++){
                    if(week_data[j]['system']==name_label[i]){
                        if(week_data[j]['docStatus'].toLowerCase()=='wait approve'){
                            // console.log(today_data[j]['system'])
                            // console.log(name_label[i])
                            wait_count += 1;
                            // item[name_label[i]]['Wait'] +=1; //0= 0 + 1 
                        }else if(week_data[j]['docStatus'].toLowerCase()=='approved'){
                            app_count += 1;
                            // item[name_label[i]]['Approved'] +=1;
                        }else if(week_data[j]['docStatus'].toLowerCase()=='reject'){
                            rej_count += 1;
                            // item[name_label[i]]['Reject'] +=1;
                        }
                    }
                }
                var testttt = {system:name_label[i],Wait:wait_count,Approved:app_count,Reject:rej_count,Total:wait_count+app_count+rej_count};
                item[i] = testttt;
            }
        }else if(status=='monthly'){
            for(let i=0;i<name_label.length;i++){
                let wait_count = 0
                let app_count = 0
                let rej_count = 0
                for(let j=0;j<month_data.length;j++){
                    if(month_data[j]['system']==name_label[i]){
                        if(month_data[j]['docStatus'].toLowerCase()=='wait approve'){
                            // console.log(today_data[j]['system'])
                            // console.log(name_label[i])
                            wait_count += 1;
                            // item[name_label[i]]['Wait'] +=1; //0= 0 + 1 
                        }else if(month_data[j]['docStatus'].toLowerCase()=='approved'){
                            app_count += 1;
                            // item[name_label[i]]['Approved'] +=1;
                        }else if(month_data[j]['docStatus'].toLowerCase()=='reject'){
                            rej_count += 1;
                            // item[name_label[i]]['Reject'] +=1;
                        }
                    }
                }
                var testttt = {system:name_label[i],Wait:wait_count,Approved:app_count,Reject:rej_count,Total:wait_count+app_count+rej_count};
                item[i] = testttt;
            }
        }
        console.log(status,"  ",item)
        
        count(item);
        buildList_1(item);
        buildList_2(item);
        // updateBarChart();
        })
}

