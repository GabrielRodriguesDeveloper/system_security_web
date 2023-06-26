const validateLogin = (email, password) => {
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(key != "lastId"){
            const user = JSON.parse(localStorage.getItem(key));
            if(email === user.email & password === user.password){
                console.log("Login Válido");
                console.log(user.email + " " + user.password);
                return;
            }
        }

    }
}



const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    validateLogin(email, password);
    
})
