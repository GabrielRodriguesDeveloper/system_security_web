class SignUP {
    constructor(){
        this.form = document.querySelector("form");
        this.hasEventListener = false;
        this.lastId = localStorage.getItem("lastId") || 0;
        this.user = null;
    }

    addFormAction() {
        if(!this.hasEventListener) {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault();
                const fullName = this.form.elements.fullName.value;
                const cpf = this.form.elements.cpf.value;
                const email = this.form.elements.email.value;
                const password = this.form.elements.password.value;
                const phone = this.form.elements.phone.value;

                this.user = {
                    "fullName" : fullName,
                    "cpf" : cpf,
                    "email" : email,
                    "password" : password,
                    "phone" : phone,
                }
                localStorage.setItem(this.lastId, JSON.stringify(this.user));
                this.lastId++;
                localStorage.setItem("lastId", this.lastId);
                window.location.href = "../views/group_page.html"
            });
            this.hasEventListener = true;
        }
    }
}

const signUp1 = new SignUP();
signUp1.addFormAction();


