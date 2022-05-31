let menubtn = document.getElementById("menu");
menubtn.onclick = function () {
  let menu = document.querySelector(".items");
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
