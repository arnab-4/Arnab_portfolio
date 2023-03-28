const firebaseConfig = {
    apiKey: "AIzaSyC2R2MUX8WBYU5unGbsaSQlpzNzCe_t-Fc",
    authDomain: "signup-page-357f1.firebaseapp.com",
    projectId: "signup-page-357f1",
    storageBucket: "signup-page-357f1.appspot.com",
    messagingSenderId: "484946030906",
    appId: "1:484946030906:web:f3adefb16dfcdad9906003",
    measurementId: "G-25YYW9LSM2"
  };
   firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

  var datab = firebase.database().ref('forms');
  function UserRegister(){
      var email = document.getElementById('eemail').value;
      var password = document.getElementById('lpassword').value;
      firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){

      }).catch(function (error) {
          var errorcode = error.code;
          var errormsg = error.message;
      });
      
    }
    const auth = firebase.auth();
    function SignIn(){
        var email = document.getElementById('eemail').value;
        var password = document.getElementById('lpassword').value;
        const promise = auth.signInWithEmailAndPassword(email,password);
        promise.catch( e => alert(e.msg));
            window.open("https://arnab-4.github.io/Arnab-s-portfolio/","_self");
    }
  document.getElementById('form').addEventListener("submit", (e) => {
e.preventDefault();
var userInfo = datab.push();
userInfo.set({
    name: getId("fname"),
    email : getId("eemail"),
    password : getId('lpassword')
});
alert("Sucessfully Signed in");
console.log('Sent');
document.getElementById('form').reset();
window.open("https://arnab-4.github.io/Arnab-s-portfolio/","_self");
});
function getId(id){
    return document.getElementById(id).value;
}