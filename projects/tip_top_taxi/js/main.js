// const menuBgTrigger = document.querySelector(".bg__trigger");
const mobineNavBtn = document.querySelector(".mobile__nav-btn");
const navContainer = document.querySelector(".nav");

function hideNav() {
  document.body.classList.add("mobile-hiding");
  document.body.classList.remove("mobile-active");
  setTimeout(function () {
    document.body.classList.remove("mobile-hiding");
  }, 1000);
}

navContainer.addEventListener("click", (e) => {
  if (!document.body.classList.contains("mobile-active")) return;
  const _target = e.target;
  if (!_target.matches(".nav__list")) {
    hideNav();
  }
  if (_target.tagName === "A") {
    if (document.body.classList.contains("mobile-active")) {
      hideNav();
    }
  }
});

mobineNavBtn.addEventListener("click", (e) => {
  if (!document.body.classList.contains("mobile-active")) {
    document.body.classList.add("mobile-active");
  }
});

AOS.init();
