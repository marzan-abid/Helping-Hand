
const admin_name= document.getElementById('admin_name');
const admin_username = document.getElementById('admin_username');
const admin_email = document.getElementById('admin_email');
const admin_hospital = document.getElementById('admin_hospital');
const admin_designation = document.getElementById('admin_designation');
const admin_num = document.getElementById('admin_num');
const admin_pass = document.getElementById('admin_pass');
const admin_confirm_pass = document.getElementById('admin_confirm_pass');


class Admin extends Person{
  constructor(name,userName,email,num,pass,confirmPass,observer,designation,hospital){
    super(name,userName,email,num,pass,confirmPass,observer);
    this.observer.addPerson(this);
    this.designation = designation;
    this.hospital = hospital;
  }
  completeSignUp() {
    if(!super.doValidate()){return false;}
    //console.log(this.userName + "Hudai");
    const gend = getGender("admin");
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(this.email,this.pass).catch(function	(error) {
        console.log("Hudai");
      console.log(error.message);
    });


    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user)
      if (user){
        console.log("Signed Up ");
        const userId = user.uid;
        //console.log(this.userName);
        firebase.database().ref('Admin/' + userId).set({
          adminName: admin_name.value,
          adminUsername : admin_username.value,
          adminEmail: admin_email.value,
          adminGender : gend,

          adminNumber : admin_num.value,
          userID: userId
        }).then(function() {
          console.log('Data write succeeded');
          alert("Sign up complete");
        })
        .catch(function(error) {
          console.log('Data write failed');
        });
      }
      else {
        console.log("No user is signed up.");
      }
    });
  }
}

function adminUserDoSomething()
{
   observer = new Observer();
    console.log(admin_name.value,admin_username.value,admin_email.value,admin_num.value,
    admin_pass.value,admin_confirm_pass.value, observer,admin_designation.value,admin_hospital.value);
    admin = new admin(admin_name.value,admin_username.value,admin_email.value,admin_num.value,
    admin_pass.value,admin_confirm_pass.value, observer,admin_designation.value,admin_hospital.value);


	person = doctor;
	observer.work();


}