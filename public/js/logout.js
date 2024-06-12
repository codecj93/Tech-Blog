const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", (event) => {
    fetch("/api/users/logout", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        }
    })
    .then((res) => {
        if(res.status == 204) {
            console.log("Logout successful!")
            window.location.href = "/"
        } else if(res.status == 404) {
            console.log('Something went wrong!')
        }
    })
})