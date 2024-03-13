document.getElementById("imgmenu").addEventListener("click", function () {
  var menu = document.getElementById("menuresponsive");
  menu.style.display = "flex";
});

document.getElementById("cancel").addEventListener("click", function () {
  var menu = document.getElementById("menuresponsive");
  menu.style.display = "none";
});
