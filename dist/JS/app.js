// scroll stuff
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
const animation = document.getElementById("animation-wrapper-about");
const animation_icons = document.getElementById("animation-wrapper-icons");
const animation_video = document.getElementById("animation-wrapper-video");
const animation_contact = document.getElementById("animation-wrapper-contact");
window.onscroll = function () {
  if (window.pageYOffset > 10) {
    header.classList.add("header-scrolled");
    footer.classList.add("footer-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    footer.classList.remove("footer-scrolled");

    animation.classList.add("scrolled-home");
    animation.classList.remove("scrolled-about");
    animation_icons.classList.remove("scrolled-icons");
    animation_video.classList.remove("scrolled-video");
    animation_contact.classList.remove("scrolled-contact");
  }

  if (window.pageYOffset > 350) {
    animation.classList.remove("scrolled-home");
    animation.classList.add("scrolled-about");
  }
  if (window.pageYOffset > 800) {
    // animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-home");
    animation_icons.classList.add("scrolled-icons");
  }
  if (window.pageYOffset > 1600) {
    animation.classList.remove("scrolled-home");
    animation_video.classList.add("scrolled-video");
  }
  if (window.pageYOffset > 2600) {
    animation.classList.remove("scrolled-home");

    animation_contact.classList.add("scrolled-contact");
  }
};

// smooth scroll from traversy media
$("a").on("click", function (e) {
  if (this.hash !== "") {
    console.log(e.target);
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
