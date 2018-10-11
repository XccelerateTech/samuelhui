class User{
    constructor(x){
      this.lastName = x.name.last;
      this.firstName = x.name.first;
      this.dob = x.dob;
      this.email = x.email;
    }
  }
  function getPerson(){
      let http = new XMLHttpRequest();
      http.open("GET", "https://randomuser.me/api/?results=5")
      http.onreadystatechange = function(){
          if(http.readyState != XMLHttpRequest.DONE){
              return
          }else if(http.status == 200){
              let parsedInfo = JSON.parse(http.responseText)
              let person = parsedInfo.results.map(function(thingsInsideResult){
                return new User(thingsInsideResult)
              })
              console.log(person)
          }
  
      }
      http.send()   
  }
  
  getPerson()


/*getPerson(function(data){
    let firstName = data.results.name.map((x) => x.first);
    let lastName = data.results.name.map((x)=> x.last);
    let email = data.results.map((x)=> x.email);
    let dob = data.results.map((x)=> x.date);
    let person =[firstName, lastName, email, dob];
    return person
}) */