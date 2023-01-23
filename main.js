function signup(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var pass= document.getElementById('password').value;
    var user = {
        email:email,
        username:username,
        password:pass,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    console.log("user added");
   

}

function loginfun(e){
    event.preventDefault();
    // console.log(123);

   
    var username = document.getElementById('username').value;
    var pass= document.getElementById('password').value;
    var result = document.getElementById('result');
    

    var user=localStorage.getItem(username);
    let data = JSON.parse(user);
  console.log(data);

    if(user == null){
                result.innerHTML = "wrong username";
            }
            else if( username == data.username && pass == data.password){
                result.innerHTML = "username and password are correct." 
                alert("username and password are correct.");
                
        
            } else{
                result.innerHTML = "wrong password";
                alert("wrong password");
            }
}