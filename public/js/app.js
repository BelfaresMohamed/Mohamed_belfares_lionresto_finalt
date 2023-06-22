let login = document.querySelector(".login")
let closeBtn = document.querySelectorAll(".close-button")
let menubar = document.querySelector(".menubar")
let nav = document.querySelector('.nav')
let minisect1 = document.querySelector(".minisect1")
let watching = document.querySelector(".watching")
let modalbtn = document.querySelector("#modal1")
let modalContent = document.querySelector(".contenu")
let signupBTn = document.querySelector(".signupBTn")
let loginBtn = document.querySelector(".loginBtn")
let signup = document.querySelector(".signup")
let h1 = document.querySelector('h1')


// ouvrir le modal d'inscription
modalbtn.addEventListener("click", () => {
    modalContent.style.display = 'initial'
})
// fermer le modal 
closeBtn.forEach(element => {
    element.addEventListener("click", () => {
        modalContent.style.display = 'none'
    })

});

loginBtn.addEventListener("click", () => {
    if (signupBTn.classList.contains("active-area")) {
        signupBTn.classList.remove("active-area")
        loginBtn.classList.add("active-area")
        login.style.display = 'block'
        signup.style.display = 'none'

    }
})
signupBTn.addEventListener("click", () => {
    if (loginBtn.classList.contains("active-area")) {
        loginBtn.classList.remove("active-area")
        signupBTn.classList.add("active-area")
        login.style.display = 'none'
        signup.style.display = 'block'

    }
})

// BURGGER 
menubar.addEventListener("click", () => {
    if (menubar.classList.contains('fa-bars')) {
        nav.style.right = '0'
        nav.style.transition = "0.5s ease"
        menubar.style.zIndex = '1'
        menubar.classList.remove('fa-bars')
        menubar.classList.add('fa-xmark')
        document.body.style.overflow = 'hidden';
    } else {
        nav.style.right = '-100%'
        nav.style.transition = "0.5s ease"
        menubar.style.zIndex = '3'
        menubar.classList.remove('fa-xmark')
        menubar.classList.add('fa-bars')
        document.body.style.overflow = 'auto';

    }

})
// Vedio Youtube 

watching.addEventListener("click", () => {
    minisect1.style.display = 'initial'
    minisect1.innerHTML += `<i class="cursor-pointer fas fa-xmark text-white-50 fs-1 position-fixed end-0 me-3 mt-2"></i>
    <iframe class="position-fixed top-50 start-50 translate-middle" width="650" height="480" src="https://www.youtube.com/embed/DGWKLguqjno" title="Soufiane Az x Cheikha Rimitti - Nouar (Remix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    // close vedio
    minisect1.style.zIndex = '4'
    let minisect1close = minisect1.querySelector("i")

    minisect1close.addEventListener("click", () => {
        minisect1.innerHTML = ``
        minisect1.style.display = 'none'

    })
})



