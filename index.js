// navbar controlling
let burgerBar = document.getElementById("burger_bar")
let links = document.getElementById("links")
let closed = true;
burgerBar.addEventListener("click", () => {
    if (closed) {
        links.classList.replace("d-none", "d-block")
        closed = !closed
    } else {
        links.classList.replace("d-block", "d-none")
        closed = !closed
    }
})

// close when clicking on one of them 
let navLinks = document.querySelectorAll("nav .links ul li ")

for (let link of navLinks) {
    link.addEventListener("click", () => {
        if (!closed) {
            links.classList.replace("d-block", "d-none")
            closed = !closed
        }
    })

}