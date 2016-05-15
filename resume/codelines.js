function load() {
    var ctx = document.getElementById("codelines");
    var totalLineElem = document.getElementById("totalLines");
    totalLineElem.innerHTML = totalLineElem.innerHTML.replace("_totallines_", totalLines.toString());
    console.log(totalLines.toString())
    /*
    var myLang = new Array(
        "C/C++ 30830",
        "python 4149",
        "HTML 3379",
        "css 2830",
        "JavaScript 1321",
        "swift 1068",
        "Java 999",
        "Objective-C 624",
        "Ruby 424",
        "php 245"
    );
    var myLines = new Array(30830, 4149, 3379, 2830, 1321, 1068, 999, 624, 424, 245);
    */
    /*
    var code_lines_data = document.createElement('script');
    code_lines_data.src = 'codeline_data.js';
    document.head.appendChild(code_lines_data);
    */
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
                        "#880088"
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
                        "#880088"
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
