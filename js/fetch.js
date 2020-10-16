// ==========fetching register/signup api from backend

function onRegister () {
    const querySelectorData = [
        'landlord_name',
        'compound_name',
        'compound_number',
        'email',
        'phone_number',
        'password',
        'address',
        'exampleFormControlSelect1',
    ];

    const querySelectorElements = querySelectorData.map((attrVal) => {
        const { name, value } = document.getElementById(attrVal);
        return { name, value };
    });

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {}

    querySelectorElements.forEach(({ name, value }) => {
        if (name === 'packages') {
            body[name] = [value.toLowerCase()];
            return null;
        }
        body[name] = value;
    });

    fetch('https://ngrecycle.herokuapp.com/api/v1/auth/register', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        redirect: 'follow',
    })
    .then((res) => res.json())
    .then((data) => {
        localStorage.setItem('userdetails', JSON.stringify(data));
        localStorage.getItem('userdetails');
        location.replace('http://localhost:5501/DIGIWASTE/user.html')
    })
    .catch((err) => console.log(err));
};


// ========= login fetch api
function onLogin() {
    const querySelectorData = [
        'email',
        'password'
    ]
    const querySelectorElements = querySelectorData.map((attrVal) => {
        const { name, value } = document.getElementById(attrVal);
            return { name, value };
    });
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = {}
    
    querySelectorElements.forEach(({ name, value }) => {
        body[name] = value;
    });

    fetch('https://ngrecycle.herokuapp.com/api/v1/auth/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        redirect: 'follow'
    })
    .then((res) => res.json())
    .then((data) => {
        localStorage.setItem('userdetails', JSON.stringify(data));
        localStorage.getItem('userdetails');
        location.replace('http://localhost:5501/DIGIWASTE/user.html')
    })
    .catch((err) => console.log(err));
}