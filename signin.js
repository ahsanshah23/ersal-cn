function login()
{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)

     .then(function (success){
        window.alert("Succesfully logged in, Welcome!");
        window.location.href = "home.html";
    })
    .catch(function(error){
        window.alert("error");
    })
   
}