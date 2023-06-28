let login = document.querySelector(".login")
let closeBtn = document.querySelectorAll(".close-button")
let menubar = document.querySelector(".menubar")
let nav = document.querySelector('.nav')
let minisect1 = document.querySelector(".minisect1")
let watching = document.querySelector(".watching")
let screnyou = document.querySelector(".img-ytb")
let body = document.body
let h1 = document.querySelector('h1')
let modal = document.getElementById("myModal");
let btn = document.getElementById("modal1");
let span = document.getElementsByClassName("close")[0]



btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



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

watching.addEventListener("click", () => {
    minisect1.style.display = 'initial'
    minisect1.innerHTML += `<i class="cursor-pointer fas fa-xmark text-white-50 fs-1 position-fixed end-0 me-3 mt-2"></i>
    <iframe class="position-fixed top-50 start-50 translate-middle" width="650" height="480" src="https://www.youtube.com/embed/DGWKLguqjno" title="Soufiane Az x Cheikha Rimitti - Nouar (Remix)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

    minisect1.style.zIndex = '4'
    let minisect1close = minisect1.querySelector("i")
    body.style.overflow = 'hidden';


    minisect1close.addEventListener("click", () => {
        body.style.overflow = 'auto';
        minisect1.innerHTML = ``
        minisect1.style.display = 'none'

    })
})

screnyou.addEventListener("click", () => {
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

let scroll_up = document.querySelector(".up")
window.onscroll = function () {
    if (this.scrollY >= 500) {
        scroll_up.classList.add("show")
    } else {
        scroll_up.classList.remove("show")

    }
}
scroll_up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})


