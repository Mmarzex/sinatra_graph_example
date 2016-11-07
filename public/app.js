var app = new Vue({
    el: '#hello-world-app',
    data: {
        msg: 'Hello Vue!'
    }
});

$.getJSON("/test_two", function(result) {
    var ctx = $("#myChart");
    console.log(result);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: result["labels"],
            datasets: [{
                label: '# of shiz',
                data: result["data"],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
});


