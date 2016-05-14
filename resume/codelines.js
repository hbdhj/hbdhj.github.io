function load() {
    var ctx = document.getElementById("codelines");
    var codeType = new Chart(ctx, {
        type: 'pie',
        data: {
            // 2016-05-14 {'go': 24, 'php': 245, 'c': 29182, 'java': 999, 'html': 739, 'python': 3987, 'ajax': 600, 'swift': 312, 'javascript': 806, 'css': 2830, 'objective-c': 107, 'ruby': 424}
            labels: [
                "C/C++ 29182",
                "python 3987",
                "css 2830",
                "Java 999",
                "JavaScript 806",
                "HTML 739",
                "Ruby 424",
                "swift 312",
                "php 245"
            ],
            datasets: [
                {
                    data: [29182, 3987, 2830, 999, 806, 739, 424, 312, 245],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#00FFFF",
                        "#00FF00",
                        "#FF00FF",
                        "#0088FF",
                        "#00FF88",
                        "#8800FF"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#00FFFF",
                        "#00FF00",
                        "#FF00FF",
                        "#0088FF",
                        "#00FF88",
                        "#8800FF"
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
