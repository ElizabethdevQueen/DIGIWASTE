/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

function LOGIN() {
    var email = document.forms["logForm"]["email"];
    var password = document.forms["logForm"]["password"];

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }

    return true;
}


// =================================================
// function onLogin () {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//         "email": "enroll00@gmail.com", "password": "123456" });

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     fetch("https://ngrecycle.herokuapp.com/api/v1/login", requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             alert(result);
//             if (result.success) {
//                 localStorage.setItem('userLoginDetails', result);
//                 return location.replace("http://localhost:5501/user.html");
//             }
//             else {}
//         })
//         .catch(error => {
//             alert(JSON.stringify('error'));
//             return location.replace("http://localhost:5501/user.html");
//     });
// }

// ===================================Register Fetch
// var formE2 = document.getElementById('login__create');
//     formE2.addEventListener('submit', function(event){
//         var headers = new Headers()
//         headers.set('Accept', 'application/json');

//         var formData = new FormData();
//         for (var i=0; i<formE2.length; ++i){
//             formData.append(formE2[i].name, formE2[i].value);
//         }

//         var url = 'https://ngrecycle.herokuapp.com/api/v1/register';
//         var requestOptions = {
//             method: 'POST',
//             headers,
//             body: formData
//         };

//         var responsePromise = fetch(url, requestOptions);
//         responsePromise
//             .then(function(response){
//                 return response.json();
//             })
//             .then(function(jsonData){
//                 console.log(jsonData);
//                 document.getElementById('results').outerText =
//                     JSON.stringify(jsonData);
//             })
//             event.preventDefault();
//     });