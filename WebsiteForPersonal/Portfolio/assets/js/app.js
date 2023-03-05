const MenuMobile = document.querySelector(".hamburger");
const NavMobile = document.querySelector(".main-nav.me-auto");
function OnMenu() {
  MenuMobile.classList.toggle("h-active");
  NavMobile.classList.toggle("slidenav");
}
MenuMobile.addEventListener("click", OnMenu);

const EduMenu = document.getElementById("pills-home-tab");
const EduShow = document.getElementById("pills-home");
const SkiMenu = document.getElementById("pills-skills-tab");
const SkiShow = document.getElementById("pills-skills");
const ExpMenu = document.getElementById("pills-experience-tab");
const ExpShow = document.getElementById("pills-experience");
EduMenu.addEventListener("click", function () {
  EduMenu.classList.add("active");
  SkiMenu.classList.remove("active");
  ExpMenu.classList.remove("active");
  EduShow.classList.add("show", "active");
  SkiShow.classList.remove("show", "active");
  ExpShow.classList.remove("show", "active");
});
SkiMenu.addEventListener("click", function () {
  EduMenu.classList.remove("active");
  SkiMenu.classList.add("active");
  ExpMenu.classList.remove("active");
  EduShow.classList.remove("show", "active");
  SkiShow.classList.add("show", "active");
  ExpShow.classList.remove("show", "active");
});
ExpMenu.addEventListener("click", function () {
  EduMenu.classList.remove("active");
  SkiMenu.classList.remove("active");
  ExpMenu.classList.add("active");
  EduShow.classList.remove("show", "active");
  SkiShow.classList.remove("show", "active");
  ExpShow.classList.add("show", "active");
});

window.addEventListener("scroll", function () {
  var scroll = window.scrollY;
  if (scroll >= 100) {
    this.document.querySelector(".header-area").classList.add("sticky");
    this.document.querySelector(".header-area").style.backgroundColor =
    "#e5e5e5";
  } else {
    this.document.querySelector(".header-area").classList.remove("sticky");
    this.document.querySelector(".header-area").style.backgroundColor = null;
  }
});
