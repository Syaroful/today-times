//Navbar-Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
      header.classList.remove("nav-bar");
      toTop.classList.remove("hidden");
      toTop.classList.add("flex");
    } else {
      header.classList.remove("navbar-fixed");
      header.classList.add("nav-bar");
      toTop.classList.add("hidden");
      toTop.classList.remove("flex");
    }
  };
  // Hamburger
  
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
  