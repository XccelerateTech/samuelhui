var http = new XMLHttpRequest();
http.open("GET", "/js/data.json");
http.onreadystatechange = function () {
    if (http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if (http.status == 200) {
        alert(http.responseText);
    } else {
        alert('error occurred' + http.status);
    }
}
http.send()
