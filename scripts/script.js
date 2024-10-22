// JavaScript Document
console.log("hi");

const menuOpenButton = document.querySelector("header button:nth-of-type(1)");
const deNav = document.querySelector("header nav");



menuOpenButton.onclick = openMenu;


function openMenu(){
  deNav.classList.add("toonMenu")
  // menuSluitButton.hidden = false;
  
}


// sluiten button

const menuSluitButton = document.querySelector("li > button");


menuSluitButton.onclick = sluitMenu;



function sluitMenu() {
  deNav.classList.remove("toonMenu");
}
