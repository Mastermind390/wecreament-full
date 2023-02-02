const menuEl = document.getElementById("menu");
const sidebarEl = document.querySelector(".sidebar");
const cancelButtonEl = document.getElementById("cancel-button")
const sidebarEll = document.getElementById("sidebar");

menuEl.addEventListener("click", ()=>{
  sidebarEl.style.display = "flex";
})

cancelButtonEl.addEventListener("click", ()=>{
  sidebarEl.style.display = "none";
})


function myFunction() {
  let dropdownContent = document.getElementById("dropdown-content");
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
}

