const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#name-login").value;
    const password = document.querySelector("#password-login").value;

    fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then((res) => {
        if(res.status == 200) {
            console.log("User login successful!")
            window.location.href = "/dashboard"
        } else if(res.status == 400) {
            console.log('Something went wrong!')
        }
    })
})