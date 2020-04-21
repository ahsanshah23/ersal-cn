var db = firebase.firestore();
var NamePersonal = document.getElementById("NamePersonal");
var NumberPersonal = document.getElementById("NumberPersonal");
var cnic2 = document.getElementById("national");
var address = document.getElementById("address");
var rooms = document.getElementById("rooms");
var block = document.getElementById("block");
var area = document.getElementById("area");
var rent = document.getElementById("rent");
var city = document.getElementById("city");
var description = document.getElementById("description");


$("#file").on("change", function(event){
        selectedflie = event.target.files[0];
    });

 function upload()
 {
    var filename = selectedflie.name;
    var storageRef = firebase.storage().ref('/houses/' + filename);
    var uploadtask = storageRef.put(selectedflie).then(function(snapshot) {
        window.alert('Uploaded a file!');
        storageRef.getDownloadURL().then(function(url){
        urlimage = url;
    });
    
    });
    
 }


function addhouse()
{
    
   
    var user = firebase.auth().currentUser;
    // if (user != null) {
        
    //     window.alert(user.email)  
    // }
    // window.alert(user);
    
    db.collection("houses").doc().set({
    NamePersonal: NamePersonal.value,
    NumberPersonal: NumberPersonal.value,
    cnic2: cnic2.value,
    address: address.value,
    rooms: rooms.value,
    rent: rent.value,
    area: area.value,
    block: block.value,
    description: description.value,
    status: "available",
    // picture:urlimage  
    })
    .then(function() {
        window.alert("House succesfully registered");
        window.location.href = "home.html";
    })
    .catch(function(error) {
        window.alert("error");
    });

}