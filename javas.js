function hide_noti() {
    let h = document.querySelector(".notification")
    h.setAttribute("style", "display: none;")
}

function showSearchBar() {
    let h = document.querySelector(".navlink-box")
    h.setAttribute("style", "display: none;")
    let v = document.querySelector(".search")
    v.setAttribute("style", "display:block;")
}

function backToNavlink() {
    let h = document.querySelector(".navlink-box")
    h.setAttribute("style", "display: block;")
    let v = document.querySelector(".search")
    v.setAttribute("style", "display:none;")
}

function switchDropdownList() {
    let h = document.querySelector(".dropdown--list")
    let display = window.getComputedStyle(h).display
    if (display == 'none') {
        h.setAttribute("style", "display: block;")
    } else {
        h.setAttribute("style", "display: none;")
    }
}