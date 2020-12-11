
// ========= login fetch api
function onLogin() {
    const querySelectorData = [
        'email',
        'password',
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


// =============user logout ===============
function onLogout() {
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

    fetch('https://ngrecycle.herokuapp.com/api/v1/auth/logout', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        redirect: 'follow'
    })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('userdetails', JSON.stringify(data));
            localStorage.getItem('userdetails');
            location.replace('http://localhost:5501/DIGIWASTE/index.html')
        })
        .catch((err) => console.log(err));
}

// =======Admin login=======
function onAdminLogin() {
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

    fetch('https://ngrecycle.herokuapp.com/api/v1/admin/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        redirect: 'follow'
    })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('userdetails', JSON.stringify(data));
            localStorage.getItem('userdetails');
            location.replace('http://localhost:5501/DIGIWASTE/admin.html')
        })
        .catch((err) => console.log(err));
}

