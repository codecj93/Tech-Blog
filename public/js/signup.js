const signupForm = document.querySelector(".signup-form");

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#name-signup").value;
    const password = document.querySelector("#password-signup").value;

    fetch("/api/users/", {
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
            console.log("User signup successful!")
            window.location.href = "/dashboard"
        } else if(res.status == 400) {
            console.log('Something went wrong!')
        }
    })
})