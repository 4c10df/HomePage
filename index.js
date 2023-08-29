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

var emailfield = document.getElementById("email-field");
var emailerror = document.getElementById("email-error");


      //// for email  ////////
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
var emailfield1 = document.getElementById("email-field1");
var emailerror1 = document.getElementById("email-error1");

function validateEmail2() {
    if(!emailfield1.value.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[+*\.][a-z]{3,4}$/)) {
      emailerror1.innerHTML ="Valid email required";
      emailfield1.style.borderColor ="red";
      emailfield1.style.backgroundColor =" rgb(248, 200, 200)";
      return false;
    }
  
    else {
      emailerror1.innerHTML ="";
      emailfield1.style.borderColor ="green";
      emailfield1.style.backgroundColor ="";
      return true;
    }
  }

function emailbutton() {
  if (validateEmail() === true) {
    closepage(), openPopup();
  }
}
//// for Menupopup end  ////////


