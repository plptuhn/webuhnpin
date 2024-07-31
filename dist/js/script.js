const sideDropdown1 = document.querySelector(".side-dropdown1");
const sideItems1 = document.querySelector(".side-items1");
const arrowDown1 = document.querySelector(".arrow1");

sideDropdown1.addEventListener("click", function() {
    sideItems1.classList.toggle("menu-active");
    arrowDown1.classList.toggle("arrow-active");
});

const menuBar = document.querySelector(".menu-bar");
const sideBar = document.querySelector(".sidebar");
const bgSidebar = document.querySelector(".bg-sidebar");

menuBar.addEventListener("click", function() {
  sideBar.classList.toggle("active");
  bgSidebar.classList.toggle("bg-active");
});

bgSidebar.addEventListener("click", function() {
    sideBar.classList.remove("active");
    this.classList.remove("bg-active");
});

//Prevent right click
document.oncontextmenu = () => {
  alert("Don't try right click")
  return false
}

/* Still anyone can inspect elements by F12 key. View page source by 
Ctrl + U key. Copy by ctrl + C. Paste by ctrl + v key. Let's prevent these */

document.onkeydown = e => {
  //Prevent F12 key
  if(e.key == "F12") {
    alert("Don't try to inspect element")
    return false
  }
  //Prevent showing page source by ctrl +  U
  if(e.ctrlKey && e.key == "u") {
    alert("Don't try to view page sources")
    return false
  }
  //Prevent copy anything from the page
  if(e.ctrlKey && e.key == "c") {
    alert("Don't try to copy page element")
    return false
  }
  //Prevent paste anything from other sources
  if(e.ctrlKey && e.key == "v") {
    alert("Don't try to paste anything to page")
    return false
  }
}


