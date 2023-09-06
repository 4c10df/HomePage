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


//let sections = document.querySelectorAll('section');
//let navlink = document.querySelectorAll('nav a');

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
//// vlidateEmail ////

var emailfield = document.getElementById("email-field");
var emailerror = document.getElementById("email-error");


function validateEmail() {
  if(!emailfield.value.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[+*\.][a-z]{3,4}$/)) {
    emailerror.innerHTML ="Valid email required";
    emailfield.style.borderColor ="red";
    emailfield.style.backgroundColor =" rgb(248, 200, 200)";
    return false;
  }

  else {
    emailerror.innerHTML ="";
    emailfield.style.borderColor ="green";
    emailfield.style.backgroundColor ="";
    return true;
  }
}

//// gotMail popup  ////////
function emailbutton() {
  if (validateEmail() === true) {
    closepage() , openMail();
  }
}


let gotMail = document.getElementById("gotMail");
function openMail(){
  gotMail.classList.add("open-Mail");
}
function closeMail(){
  gotMail.classList.remove("open-Mail");
}
//// for first page= to  ////////
let page = document.getElementById("page");
function closepage(){
  page.classList.add("open-page");
}