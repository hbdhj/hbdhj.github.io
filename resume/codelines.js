function load() {
    var ctx = document.getElementById("codelines");
    var totalLineElem = document.getElementById("totalLines");
    totalLineElem.innerHTML = totalLineElem.innerHTML.replace("_totallines_", totalLines.toLocaleString());
    var arrayLength = myLines.length;
    for (var i = 0; i < arrayLength; i++) {
        myLang[i] = myLang[i] + " " + myLines[i].toLocaleString();
    }
    var codeType = new Chart(ctx, {
        type: 'pie',
        data: {
            // 2016-05-14 ('c', 30381), ('python', 4149), ('html', 3379), ('css', 2830), ('javascript', 1321), ('swift', 1068), ('java', 999), ('objective-c', 624), ('ajax', 600), ('ruby', 424), ('php', 245), ('go', 24)
            labels: myLang,
            datasets: [
                {
                    data: myLines,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#00FFFF",
                        "#00FF00",
                        "#FF00FF",
                        "#0088FF",
                        "#00FF88",
                        "#8800FF",
                        "#880088",
                        "#008888",
                        "#AAFF88",
                        "#88AAFF",
                        "#AA0088"
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
                        "#8800FF",
                        "#880088",
                        "#008888",
                        "#AAFF88",
                        "#88AAFF",
                        "#AA0088"
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
