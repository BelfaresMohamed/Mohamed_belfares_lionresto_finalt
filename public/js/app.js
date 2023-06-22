let login = document.querySelector(".login")
let closeBtn = document.querySelectorAll(".close-button")
let menubar = document.querySelector(".menubar")
let nav = document.querySelector('.nav')
let minisect1 = document.querySelector(".minisect1")
let watching = document.querySelector(".watching")
let modalbtn = document.querySelector("#modal1")
let modalContent = document.querySelector(".contenu")
let signupBTn = document.querySelector(".signupBTn")
let imgYtb = document.querySelector(".img-ytb")
let body = document.body
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
        body.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    } else {
        nav.style.right = '-100%'
        nav.style.transition = "0.5s ease"
        menubar.style.zIndex = '3'
        menubar.classList.remove('fa-xmark')
        body.style.overflow = 'auto';   
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
    body.style.overflow = 'hidden';


    minisect1close.addEventListener("click", () => {
        body.style.overflow = 'auto';
        minisect1.innerHTML = ``
        minisect1.style.display = 'none'

    })
})

imgYtb.addEventListener("click", () => {
    minisect1.style.display = 'initial'
    minisect1.innerHTML += `<i class="cursor-pointer fas fa-xmark text-white-50 fs-1 position-fixed end-0 me-3 mt-2"></i>
    <iframe class="position-fixed top-50 start-50 translate-middle" width="650" height="480" src="https://www.youtube.com/embed/DGWKLguqjno" title="Soufiane Az x Cheikha Rimitti - Nouar (Remix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

    minisect1.style.zIndex = '4'
    body.style.overflow = 'hidden';
    let minisect1close = minisect1.querySelector("i")

    minisect1close.addEventListener("click", () => {
        minisect1.innerHTML = ``
        minisect1.style.display = 'none'
        body.style.overflow = 'auto';


    })
})

let starterBtn = document.querySelector(".starter-btn")
let breakfeastBtn = document.querySelector(".breakfeast-btn")
let lunchBtn = document.querySelector(".lunch-btn")
let dinnerBtn = document.querySelector(".dinner-btn")
let startertable = document.querySelector(".starter-table")
let breakfeasttable = document.querySelector(".breakfeast-table")
let lunchtable = document.querySelector(".lunch-table")
let dinnertable = document.querySelector(".dinner-table")
let itemsTable = document.querySelectorAll(".items-table")

starterBtn.addEventListener("click", () => {
    itemsTable.forEach(element => {
        if (element.classList.contains("starter-table")) {
            setTimeout(() => {
                element.style.display = "block"
                element.style.transition = "0.5s ease"
            }, 200);
        } else {
            element.style.display = "none"
        }

    });

})

//!2nd
breakfeastBtn.addEventListener("click", () => {
    itemsTable.forEach(element => {
        if (element.classList.contains("breakfeast-table")) {
            setTimeout(() => {
                element.style.display = "block"
                element.style.transition = "0.5s ease"
            }, 200);
        } else {
            element.style.display = "none"
        }

    });

})
//! 3rd
lunchBtn.addEventListener("click", () => {
    itemsTable.forEach(element => {
        if (element.classList.contains("lunch-table")) {
            setTimeout(() => {
                element.style.display = "block"
                element.style.transition = "0.5s ease"
            }, 200);
        } else {
            element.style.display = "none"
        }

    });

})
//! 4th
dinnerBtn.addEventListener("click", () => {
    itemsTable.forEach(element => {
        if (element.classList.contains("dinner-table")) {
            setTimeout(() => {
                element.style.display = "block"
                element.style.transition = "0.5s ease"
            }, 200);
        } else {
            element.style.display = "none"
        }

    });

})

