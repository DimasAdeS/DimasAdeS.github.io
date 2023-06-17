// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika snack menu di klik
document.querySelector("#snack_menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar slide bar untuk menghilangkan nav
const snack = document.querySelector("#snack_menu");

document.addEventListener("click", function (e) {
  if (!snack.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
