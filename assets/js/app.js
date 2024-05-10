
const menuicon = document.querySelector(".menuicon")
const menulist = document.querySelector(".menulist")

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("active")
    document.body.classList.toggle("overflow-hidden")
    menuicon.classList.toggle("active");
})
