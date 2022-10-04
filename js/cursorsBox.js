var cursorTag = document.querySelector("div.wraper");
var box = cursorTag.querySelector("div.cursorsBox");

function boxMove(e) {
  box.style.display = "block";
  box.style.opacity = "1";
  box.style.left = e.pageX + "px";
  box.style.top = e.pageY + "px";
}
function clearBoxMove() {
  box.style.display = "none";
  box.style.opacity = "0";
}
function asideToggle() {
  const aside = document.querySelector("div.navbar");
  const iconBtn = document.querySelector("div.navbar button.show img");
  iconBtn.classList.toggle("rotate");
  aside.classList.toggle("show");
}
