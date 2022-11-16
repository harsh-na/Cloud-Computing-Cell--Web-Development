

const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyBDWxQ5gZFOcb8Eb9a9rGsnho3x4N6i5pc",
  authDomain: "web-project-bd188.firebaseapp.com",
  databaseURL: "https://web-project-bd188-default-rtdb.firebaseio.com",
  projectId: "web-project-bd188",
  storageBucket: "web-project-bd188.appspot.com",
  messagingSenderId: "466020963978",
  appId: "1:466020963978:web:f46ee17a642c2a96d03f73",
  measurementId: "G-SNXW9YVDQ2",
};


console.log('sanchi');
// reference your database
var contactFormDB = firebase.database().ref("petDetails");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phoneno = getElementVal("phoneno");
  var details = getElementVal("details");
  var add = getElementVal("add");

  savedetails(name, emailid, phoneno,details,add);
  //   reset the form
  document.getElementById("form").reset();
}
const savedetails = (name, emailid, phoneno,details,add) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    emailid: emailid,
    phoneno: phoneno,
    details:details,
    add:add,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
