const enterButtonClicked = () => {
    const enterButton = document.getElementById("enterButton");
    enterButton.addEventListener("click", (e) => {
        window.location.href = "../views/login.html";
    })
}

enterButtonClicked();