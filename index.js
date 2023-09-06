const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function close(){
  mainMenu.style.top = '-99%';
}
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
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

/// for Menupopup end  ////////


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
function emailbutton2() {
  if (validateEmail2() === true) {
    closepage() , openMail();
  }
}