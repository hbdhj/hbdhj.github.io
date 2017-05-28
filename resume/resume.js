function load() {
    var totalLineElem = document.getElementById("github");
    var totalLines = myLines.reduce(function(previousValue, currentValue){
        return currentValue + previousValue;
    });
    totalLineElem.innerHTML = totalLines.toLocaleString();
}
