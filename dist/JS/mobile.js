// preload
const itemsLeft = document.getElementsByClassName("hide-left");
const itemsRight = document.getElementsByClassName("hide-right");
const itemsBottom = document.getElementsByClassName("hide-bottom");
const htmlElement = document.getElementsByTagName("html")[0];
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        el.offsetHeight / 2 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
$(window).on("beforeunload", function () {
  //   $("body").hide();
  $(window).scrollTop(0);
});
window.addEventListener("load", () => {
  const preload = document.getElementById("page-intro");
  preload.classList.add("finished");
  header.classList.add("loaded");
  footer.classList.add("loaded");
  headlines.classList.add("loaded");
  shapes.classList.add("loaded");
  bg.classList.add("bg-loaded");
  for (let i = 0; i < itemsLeft.length; i++) {
    itemsLeft[i].classList.add("show-from-left");
  }
  for (let i = 0; i < itemsRight.length; i++) {
    itemsRight[i].classList.add("show-from-right");
  }
  for (let i = 0; i < itemsBottom.length; i++) {
    itemsBottom[i].classList.add("show-from-bottom");
  }
});
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
const headlines = document.getElementById("headlines");
const animation = document.getElementById("animation-wrapper");
const shapes = document.getElementById("shapes-container");

const about = document.getElementById("page-about");
const icons = document.getElementById("icons-section");
const videos = document.getElementById("video-section");
const middleLink = document.getElementById("middle-link");
const bottomLink = document.getElementById("bottom-link");
const contact = document.getElementById("page-contact");
window.addEventListener("scroll", () => {
  // scroll start

  //   console.log(about.offsetTop - animation.offsetHeight / 2);
  //   console.log(about.offsetTop);
  console.log(window.scrollY);
  //   console.log("vid", videos.offsetTop);
  //   console.log("mid", middleLink.offsetTop);
  //   console.log("con", contact.offsetTop);
  if (window.scrollY > 10) {
    header.classList.add("header-scrolled");
    footer.classList.add("footer-scrolled");
  }
  if (
    window.scrollY >= about.offsetTop - vh(30) &&
    window.scrollY < icons.offsetTop - vh(30)
  ) {
    animation.style.transform =
      "translateY(" + (about.offsetTop - animation.offsetHeight / 2) + "px)";
    animation.style.transform += "translateX(" + vw(50) + "px)";
  } else if (
    window.scrollY >= icons.offsetTop - vh(30) &&
    window.scrollY < videos.offsetTop - vh(30)
  ) {
    animation.style.transform =
      "translateY(" + (icons.offsetTop + animation.offsetHeight / 2) + "px)";
  } else if (
    window.scrollY >= videos.offsetTop - vh(30) &&
    window.scrollY < middleLink.offsetTop - vh(70)
  ) {
    animation.style.transform =
      "translateY(" + (videos.offsetTop + animation.offsetHeight * 1.3) + "px)";
    animation.style.transform += "translateX(" + vw(20) + "px)";
    animation.style.transform += "scale(1.4)";
  } else if (
    window.scrollY >= middleLink.offsetTop - vh(70) &&
    window.scrollY < contact.offsetTop - vh(30)
  ) {
    animation.style.transform =
      "translateY(" +
      (middleLink.offsetTop -
        middleLink.offsetHeight * 2 -
        animation.offsetHeight) +
      "px)";
    animation.style.transform +=
      "translateX(" +
      (middleLink.offsetLeft +
        middleLink.offsetWidth / 2 -
        animation.offsetWidth / 2 -
        vw(5)) +
      "px)";
    animation.style.transform += "scale(0.3)";
  } else if (
    window.scrollY >= contact.offsetTop - vh(30) &&
    window.scrollY < contact.offsetTop + contact.offsetHeight / 2 - vh(10)
  ) {
    animation.style.transform =
      "translateY(" + (contact.offsetTop + animation.offsetHeight) + "px)";
  } else if (
    window.scrollY >=
    contact.offsetTop + contact.offsetHeight / 2 - vh(10)
  ) {
    console.log("suckit");
    animation.style.transform =
      "translateY(" +
      (bottomLink.offsetTop -
        bottomLink.offsetHeight * 2 -
        animation.offsetHeight) +
      "px)";
    animation.style.transform +=
      "translateX(" +
      (bottomLink.offsetLeft +
        bottomLink.offsetWidth / 2 -
        animation.offsetWidth / 2 -
        vw(5)) +
      "px)";
    animation.style.transform += "scale(0.5)";
  } else {
    // top reset
    animation.style.transform = "";

    header.classList.remove("header-scrolled");
    footer.classList.remove("footer-scrolled");
  }
});
function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}
function vw(w) {
  var h = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (w * h) / 100;
}

// smooth scroll
// from traversy media
$("a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      1000
    );
  }
});

// slide in from

// function run() {
//   for (let i = 0; i < itemsLeft.length; i++) {
//     if (isInViewport(itemsLeft[i])) {
//       itemsLeft[i].classList.add("show-from-left");
//     }
//   }
//   for (let i = 0; i < itemsRight.length; i++) {
//     if (isInViewport(itemsRight[i])) {
//       itemsRight[i].classList.add("show-from-right");
//     }
//   }
//   for (let i = 0; i < itemsBottom.length; i++) {
//     if (isInViewport(itemsBottom[i])) {
//       itemsBottom[i].classList.add("show-from-bottom");
//     }
//   }
// }
// window.addEventListener("load", run);
// window.addEventListener("resize", run);
// window.addEventListener("scroll", run);
