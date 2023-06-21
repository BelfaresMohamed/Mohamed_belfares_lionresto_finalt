let modalbtn = document.querySelector("#modal1")
let modalContent = document.querySelector(".contenu")
let signupBTn = document.querySelector(".signupBTn")
let loginBtn = document.querySelector(".loginBtn")
let signup = document.querySelector(".signup")
let login = document.querySelector(".login")
let closeBtn = document.querySelectorAll(".close-button")


//* show modal
modalbtn.addEventListener("click", () => {
    modalContent.style.display = 'initial'
})
//* close modal 
closeBtn.forEach(element => {
    element.addEventListener("click", () => {
        modalContent.style.display = 'none'
    })

});
//* switch to login
loginBtn.addEventListener("click", () => {
    if (signupBTn.classList.contains("active-area")) {
        signupBTn.classList.remove("active-area")
        loginBtn.classList.add("active-area")
        login.style.display = 'block'
        signup.style.display = 'none'

    }
})
//* switch to signup
signupBTn.addEventListener("click", () => {
    if (loginBtn.classList.contains("active-area")) {
        loginBtn.classList.remove("active-area")
        signupBTn.classList.add("active-area")
        login.style.display = 'none'
        signup.style.display = 'block'

    }
})