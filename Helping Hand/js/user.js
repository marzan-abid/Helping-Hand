const headerName = document.getElementById('headerName')
const user_name= document.getElementById('user_name');
const user_username = document.getElementById('user_username');
const user_email = document.getElementById('user_email');
const user_num = document.getElementById('user_num');
const user_pass = document.getElementById('user_pass');
const user_confirm_pass = document.getElementById('user_confirm_pass');
const user_age = document.getElementById('user_age')

class user extends Person{

  constructor(name,userName,email,num,pass,confirmPass,observer,age){
    super(name,userName,email,num,pass,confirmPass,observer);
    this.observer.addPerson(this);
    this.age = age;
  }
  completeSignUp() {
    if(!super.doValidate()){return false;}
      let gender = getGender("user");
      const gend = gender;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(this.email,this.pass).catch(function	(error) {
        console.log("Hudai");
      console.log(error.message);
    });




    firebase.auth().onAuthStateChanged(function(user) {
      if (user){
        console.log("Signed Up ");
        const userId = user.uid;
        firebase.database().ref('/user/' + userId).once('value').then(function(snapshot) {
				userProperty2=snapshot.val();

				headerName.innerHTML = userProperty2.userUsername;
				//a.href = "profile.html";

				//so.innerHTML = "Sign Out";
				//so.setAttribute("data-hover","Sign Out");
				/*if(userProperty.type === "admin")
				{
					ad.innerHTML = "ADMIN";
					ad.setAttribute("data-hover","ADMIN");
				}*/
				console.log(userProperty2.doctorName);
        });



        firebase.database().ref('user/' + userId).set({

			userName: user_name.value,
			userUsername: user_username.value,
			userEmail:user_email.value ,
			userGender : gend,
			userAge : user_age.value,
			userNumber : user_num.value,
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

function user_doSomething()
{
    observer = new Observer();

	user = new user(user_name.value,user_username.value,user_email.value,
		user_num.value,user_pass.value,user_confirm_pass.value,observer,user_age.value);


	person = user;

	observer.work();

}