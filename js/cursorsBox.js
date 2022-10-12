var cursorTag = document.querySelector("div.wraper");
var box = cursorTag.querySelector("div.cursorsBox");
var editWidth = document.querySelector("section");
var nav = document.querySelector("div.navbar");
var aside = document.querySelector("div.navbar");
var a = aside.offsetWidth;

function asideToggle() {
  const iconBtn = document.querySelector("div.navbar button.show img");
  iconBtn.classList.toggle("rotate");
  aside.classList.toggle("show");

  if (aside.classList.contains("show")) {
    a = 0;
  } else {
    a = aside.offsetWidth;
  }
}

function boxMove(e) {
  box.style.display = "block";
  box.style.opacity = "1";
  box.style.left = e.pageX + "px";
  box.style.top = e.pageY + "px";
  const x = ((e.pageX - a) * 100) / (cursorTag.offsetWidth - a) + "%";
  const y = (e.pageY * 100) / window.innerHeight + "%";
  box.style.transform = `translate(-${x},-${y}`;
}
function clearBoxMove() {
  box.style.display = "none";
  box.style.opacity = "0";
}
