function unique() {
    return Math.random().toString(36).substr(5, 7);
};

function submitted (){
    const event_title= document.getElementById('eventTitle');
    const person_name = document.getElementById('personName');
    const person_Address = document.getElementById('personAddress');
    const person_Age = document.getElementById('personAge');
    const person_number = document.getElementById('personNumber');
    const person_reason_catagory = document.getElementById('personReasonCatagory');
    const person_reason_description = document.getElementById('personReasonDes');
    const person_required_amount = document.getElementById('personRequiredAmount');
    const person_deadline = document.getElementById('personDeadline');
    var ID = unique()
    console.log(ID)
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Signed Up ");
            const userId = user.uid;
            console.log(userId);

            firebase.database().ref('NewApplication/' +'submitted/'+ userId + '/'+ ID).set({
                EventTile: event_title.value,
                PersonName: person_name.value,
                PersonAddress: person_Address.value,
                PersonAge: person_Age.value,
                PersonNumber: person_number.value,
                PersonReasonCatagory: person_reason_catagory.value,
                PersonReasonDescription: person_reason_description.value,
                PersonRequiredAmount: person_required_amount.value,
                PersonDeadline: person_deadline.value,
                userID: userId,

            }).then(function () {
                console.log('Data is Submitted');
                alert("Data is Submitted");
            })
                .catch(function (error) {
                    console.log('Data write failed');
                });
        } else {
            console.log("No user is signed up.");
        }
    });

}



function saveAsDraft (){
    const event_title= document.getElementById('eventTitle');
    const person_name = document.getElementById('personName');
    const person_Address = document.getElementById('personAddress');
    const person_Age = document.getElementById('personAge');
    const person_number = document.getElementById('personNumber');
    const person_reason_catagory = document.getElementById('personReasonCatagory');
    const person_reason_description = document.getElementById('personReasonDes');
    const person_required_amount = document.getElementById('personRequiredAmount');
    const person_deadline = document.getElementById('personDeadline');
    var ID = unique()
    console.log(ID)
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Signed Up ");
            const userId = user.uid;
            console.log(userId);

            firebase.database().ref('NewApplication/' +'draft/'+ userId+'/'+ID).set({
                EventTile: event_title.value,
                PersonName: person_name.value,
                PersonAddress: person_Address.value,
                PersonAge: person_Age.value,
                PersonNumber: person_number.value,
                PersonReasonCatagory: person_reason_catagory.value,
                PersonReasonDescription: person_reason_description.value,
                PersonRequiredAmount: person_required_amount.value,
                PersonDeadline: person_deadline.value,
                userID: userId,

            }).then(function () {
                console.log('Data saved as draft');
                alert("Sign up complete");
            })
                .catch(function (error) {
                    console.log('Data write failed');
                });
        } else {
            console.log("No user is signed up.");
        }
    });

}