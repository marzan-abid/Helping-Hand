var a = document.getElementById("headerName");

function getType(){
	if(document.getElementById('logAdmin').checked)
	{
		var g =  document.getElementById('logAdmin').value;
		console.log(g);
		return g;
	}
	else if(document.getElementById('logUser').checked)
	{

		var g =  document.getElementById('logUser').value;
		console.log(g);
		return g;

	}

}

function signed_in(type)
{
	firebase.auth().onAuthStateChanged(function(user) {

	if(user!==null)
	{

		var userId = user.uid;
        if(type=="Admin") {
        	console.log(type);
            firebase.database().ref('/Admin/' + userId).once('value').then(function (snapshot) {
                userProperty = snapshot.val();
                console.log(type);
                console.log(userProperty.doctorUsername);
               // window.location.href=".html";
				//document.getElementById("sup").innerHTML= userProperty.doctorUsername;

                return true;
            });
        }
        else if(type=="User") {
        	var a = document.getElementById("headerName");
            firebase.database().ref('/user/' + userId).once('value').then(function (snapshot) {
                userProperty = snapshot.val();
                console.log(userProperty);
                console.log(userProperty.userUsername);

              //  a.innerHTML = userProperty.userUsername;
                console.log(type);
               // console.log(userProperty.patientUsername);
                window.location.href="UserProfile.html";

                return true;
            });
        }

                return true;
  	}
	else {
    		console.log("No user is signed in.");
                return false;
    	}
	});
}

function login_func()
{

	const psw = document.getElementById('pass3');
	const email = document.getElementById('em2');


	const email_val = email.value;
	const pass_val = psw.value;
	const auth = firebase.auth();

	console.log("something nnn\n");

	const promise = auth.signInWithEmailAndPassword(email_val,pass_val);
	var type = getType();

	signed_in(type);

	console.log("After sign in\n");

}




