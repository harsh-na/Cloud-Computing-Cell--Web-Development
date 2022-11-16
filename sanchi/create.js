// Import the functions you need from the SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtplhy9l_fP_RK5J68Ng8IyWbyl9-2CE4",
    authDomain: "lostfound-10994.firebaseapp.com",
    projectId: "lostfound-10994",
    storageBucket: "lostfound-10994.appspot.com",
    messagingSenderId: "688268836191",
    appId: "1:688268836191:web:ae58cc8186df80e3970aea"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmpassword=document.getElementById("confirmpassword");
const submit=document.getElementById("submit");
const pin=document.getElementById("pin");

var emailid,pass,confirmpass;
submit.addEventListener("click",function(){
 var flag=1;
 emailid=email.value;
 pass=password.value;
 confirmpass=confirmpassword.value;
if(confirmpass!=pass){
    window.alert("password does not matches");
    flag=0;
}
else if(emailid==""||pass==""||confirmpass==""){
    window.alert("no field should be empty");
    flag=0;
}
else if(flag==1){
    createUserWithEmailAndPassword(auth,emailid,pass)
    window.alert("account created successfully");
}

});



