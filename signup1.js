function register()
{
    var phoneNumber = document.getElementById('phone').value;
    
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
        window.alert("Succesfully registered!");
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
        window.alert("Error");
    });
   
}