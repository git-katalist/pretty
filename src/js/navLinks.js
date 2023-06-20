const navLinksEls = document.querySelectorAll(".nav__link");
const windowPathname = window.location.pathname;

navLinksEls.forEach((navLinkEl) => {
  const navlinkPathname = new URL(navLinkEl.href).pathname;
  if (windowPathname === navlinkPathname) {
    navLinkEl.classList.add("active");
  }
});

console.log(window.location.pathname);
