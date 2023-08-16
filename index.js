const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a [herf*=' + id + ']').classList.add('active');
            }); 

        };
    });
}


//// for Menupopup  ////////
let menuPopup = document.getElementById("popup");
function  openHam() {
    popup.classList.add("open-Ham");
}
function closePopup(){
    popup.classList.remove("open-Ham");
}
//// for Menupopup button1  ////////


let openHamburger = document.getElementById("Hamburger");
function  hamburger() {
    Hamburger.classList.add("ham-burger");
}
function closeham(){
    Hamburger.classList.remove("ham-burger");
}

//// for Menupopup button2  ////////

let closeHamburger = document.getElementById("Hamburger1");
function  hamburger1() {
    Hamburger1.classList.add("ham-burger1");
}
function closeham1(){
    Hamburger1.classList.remove("ham-burger1");
}
//// for Menupopup end  ////////


//// for Menupopup end  ////////


