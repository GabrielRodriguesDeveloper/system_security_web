const getUserLogged = () => {
    const userLogged = JSON.parse(localStorage.getItem("userLogged"));
    return userLogged;
}

const showUserName = () => {
    const userLogged = getUserLogged();
    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.innerText = "Welcome, " + userLogged.fullName;
}

const logout = () => {
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", (e) => {
        let userLogged = getUserLogged();
        userLogged = null;
        localStorage.setItem("userLogged", JSON.stringify(userLogged));
        window.location.href = "../views/home.html";
    }) 
}

showUserName();
logout();