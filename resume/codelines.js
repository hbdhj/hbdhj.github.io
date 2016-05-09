function load() {
    var ctx = document.getElementById("codelines");
    var codeType = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                "C/C++ 29200",
                "python 4072",
                "HTML 3211",
                "JavaScript 1276",
                "swift 1068",
                "Java 999"
            ],
            datasets: [
                {
                    data: [29200, 4072, 3226, 1231, 1068, 999],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#00FFFF",
                        "#00FF00",
                        "#FF00FF"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#00FFFF",
                        "#00FF00",
                        "#FF00FF"
                    ]
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
