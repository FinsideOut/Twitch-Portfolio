// scroll stuff
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
window.onscroll = function () {
  if (window.pageYOffset > 10) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    footer.classList.remove("footer-scrolled");
  }
  if (window.pageYOffset > 200) {
    footer.classList.add("footer-scrolled");
  }
};

// $("a.footer-link").on("click", function (e) {
//   if (this.hash !== "") {
//     console.log(e.target);
//     e.preventDefault();
//     const hash = this.hash;
//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top,
//       },
//       800
//     );
//   }
// });
