var eventTitle, personName, personAddress, personAge, personNummber, personReasonCataory, personReasonDescription,
    personRequiredAmount, personDeadline;



window.onload = function () {

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			var userId = user.uid;
			firebase.database().ref('/NewApplication/' + '/submitted/'+userId).once('value').then(function(snapshot) {
				userProperty=snapshot.val();
				console.log(userProperty);
				console.log('baire dukse');
				for (var key in userProperty){
				   console.log(key);
				   if(userProperty.hasOwnProperty(key)){
				       var data = userProperty[key];
				        eventTitle = data.EventTile;
				        personName = data.PersonName;
                        personAddress = data.PersonAddress;
                        personAge = data.PersonAge;
                        personNummber = data.PersonNumber;
                        personReasonCataory = data.PersonReasonCatagory;
                        personReasonDescription = data.PersonReasonDescription;
                        personDeadline = data.PersonDeadline;
                        personRequiredAmount = data.PersonRequiredAmount;
                        console.log(eventTitle+ ' '+personName +' '+personAddress+' '+personAge+' '+personNummber
                        +' '+personReasonCataory+' '+personReasonDescription+' '+personDeadline+' '+personRequiredAmount);

                        var makingTable =
                    '<div class="col-md-4"' + 'id=' + divisionID + '>' +
                    '<div class="team text-center" >' +
                    '<h3>' + "PrescriptionID: " + requestID + '</h3>' +
                    '<h3>' + "Availability: " + availability + '</h3>' +
                    '<h3>' + " " + "Requested" + '</h3>' +
                    '<table class="table table-bordered">' +
                    '<tr style="font-size: large">' +
                    '<th>' + "Medicine Name" + '</th>' +
                    '<th>' + "Amount" + '</th>' +
                    '<th>' + "Total Price" + '</th>' + '</tr>' +
                    '<tbody>' + data + '</tbody>' + '</table>' +
                    '<button data-toggle="modal" data-target="#modal1" class="btn btn-blue-fill" ' + 'id="' + sellbuttonID + '" onclick=' + 'sellrequest("' + requestID + '","' + seller_Pharmacy + '")' + '>' + "Sell" + '</button>' +
                    '<button data-toggle="modal" data-target="#modal1" class="btn btn-blue-fill" ' + 'id="' + discardbuttonID + '" onclick=' + 'discardrequest("' + requestID + '","' + seller_Pharmacy + '")' + '>' + "Discard" + '</button>' + //onclick=discardrequest()
                    '</div>' + '</div>';

                    var newCard=
                    '<div id="sub_application_card"' + 'class ="card"' + 'style="width: 250px; ">'+
                      '<img src="img/team1.jpg"' + ' alt="Avatar" '+ 'style="width: 50% ;' + ' "height= 80%">'+
                      '<div class="container">'+
                      '<h4><b>'+' "Event Title"' + '</b>' + '</h4>' +
                      '<h5><b>'+' "Patient Name"' + '</b>' + '</h5>' +
                      '<p>'+ ' "This is description of the event.This is description of the event.This is description of the event."'+'</p>'+
                      '</div>'+
                        '<button href="palash.html"'+ ' style=' + '"color: black;font-size: large; border-radius: 10%; background: #00b1e4; padding: 10px 20px; margin-bottom: 20px; margin-left: 15%; margin-right:15% "'  + '>'+ "Details" +'</button>'+
                    '</div>' ;
                    sub_application_card.innerHTML= newCard;


                   }

				}

			});
			}
		 });
    }

	function updateApplication(){

	    const event_title= document.getElementById('updateeventTitle');
        const person_name = document.getElementById('updatepersonName').value;
        const person_Address = document.getElementById('updatepersonAddress').value;
        const person_Age = document.getElementById('updatepersonAge').value;
        const person_number = document.getElementById('updatepersonNumber').value;
        const person_reason_catagory = document.getElementById('updatepersonReasonCatagory').value;
        const person_reason_description = document.getElementById('updatepersonReasonDes').value;
        const person_required_amount = document.getElementById('updatepersonRequiredAmount').value;
        const person_deadline = document.getElementById('updatepersonDeadline').value;


     firebase.auth().onAuthStateChanged(function(user) {
            console.log("hiiiii");

		    if (user) {
			    var userId = user.uid;
			    console.log(userId);
			    firebase.database().ref('/NewApplication/' + '/draft/'+userId).once('value').then(function(snapshot) {
				    userProperty=snapshot.val();
				    console.log(userProperty);
				    event_title.innerHTML = userProperty.EventTile;
                    /*person_name.innerHTML = userProperty.PersonName;
                    person_Address.innerHTML = userProperty.PersonAddress;
                    person_Age.innerHTML = userProperty.PersonAge;
                    person_number.innerHTML = userProperty.PersonNumber;
                    person_reason_catagory.innerHTML = userProperty.PersonReasonCatagory;
                    person_reason_description.innerHTML = userProperty.PersonReasonDescription;
                    person_required_amount.innerHTML = userProperty.PersonRequiredAmount;
                    person_deadline.innerHTML = userProperty.PersonDeadline;*/
                    console.log(userProperty.EventTile+" "+userProperty.PersonName+" "+event_title);
                    firebase.database().ref('/NewApplication/' +'/draft/'+ userId).update({
                             EventTile : event_title,
                             PersonName : person_name,
                             PersonAddress : person_Address ,
                             PersonAge : person_Age,
                             PersonNumber : person_number,
                             PersonReasonCatagory : person_reason_catagory,
                             PersonDescription : person_reason_description,
                             PersonRequiredAmount : person_required_amount,
                             PersonDeadline : person_deadline

                    }).then(function () {
                             alert("Profile updated successfully");
                         }).catch(function (error) {
                             console.log("Update failed");
                         });

				});
			}
		 });

    }