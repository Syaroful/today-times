//Navbar-Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

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

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

window.onload = function () {
  fetch("https://api-berita-indonesia.vercel.app/cnn/nasional/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const articles = data.data.posts.slice(0, 8);
      articles.forEach((post) => {
        const markup =
          '<article class="recomded-item flex flex-col mt-12 items-start justify-between px-8 md:w-1/2 xl:w-1/4"><img src="' +
          post.thumbnail +
          '" alt="News Thumbnail" class="recomended-img h-40 w-full object-cover object-center rounded-lg mr-2"/> <div class="h-24 my-2"> <a href="' +
          post.link +
          '" target="_blank" class="rekomdened-title line-clamp-3 text-xl font-medium leading-6 text-dark">' +
          post.title +
          '</a></div> <div class="flex items-center gap-x-2 text-sm"> <a href="#" class="font-medium text-primary">Terbaru</a> <h1>&#x2022;</h1> <time datetime="2020-03-16" class="recomended-date text-gray-500">' +
          post.pubDate +
          "</time></div></article>";
        document
          .querySelector(".articles-container")
          .insertAdjacentHTML("beforeend", markup);
      });
    })
    .catch((error) => console.error(error));
};