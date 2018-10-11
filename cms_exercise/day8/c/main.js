function getName(callback){
    let http = new XMLHttpRequest();
    http.open("GET", "http://api.open-notify.org/astros.json")
    http.onreadystatechange = function(){
        if(http.readyState != XMLHttpRequest.DONE){
            return
        }else if(http.status == 200){
            let nameList = JSON.parse(http.responseText)
            callback(nameList)
        }
    }
    http.send()
}



getName(function(data){
    console.log(data.people.map((x) => x.name))
})