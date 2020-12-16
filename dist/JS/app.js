// scroll stuff
const header = document.getElementById("header-home");
const footer = document.getElementById("footer-home");
// $(window).on("scroll", function () {
//   var s = $(window).scrollTop(),
//     d = $(document).height(),
//     c = $(window).height();

//   var getScrollPercent() = (s / (d - c)) * 100;

//   // console.clear();
//   console.log(scrollPercent);
// });
function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  // console.log(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
function getPos(el) {
  // yay readability
  for (
    var lx = 0, ly = 0;
    el != null;
    lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
  );
  return { x: lx, y: ly };
}
// from
// https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag

const animation = document.getElementById("animation-wrapper");
// const animationPos = getPos(animation);
// const animationOrigX = animationPos.x - 100 + "px";
// const animationOrigY = animationPos.y - 150 + "px";

const aboutStop = document.getElementById("about-stop");
const aboutPos = getPos(aboutStop);
const aboutPosX = aboutPos.x - animation.offsetWidth / 4 + "px";
const aboutPosY = aboutPos.y - animation.offsetHeight / 2 + "px";

const iconsStop = document.getElementById("icons-stop");
const iconsPos = getPos(iconsStop);
const iconsPosX = iconsPos.x - animation.offsetWidth / 2 + "px";
const iconsPosY = iconsPos.y - animation.offsetHeight / 2 + "px";

const videoStop = document.getElementById("video-stop");
const videoPos = getPos(videoStop);
const videoPosX = videoPos.x + animation.offsetWidth / 4 + "px";
const videoPosY = videoPos.y - animation.offsetHeight * 1.5 + "px";

const middleStop = document.getElementById("middle-stop");
const middlePos = getPos(middleStop);
const middlePosX = middlePos.x - animation.offsetWidth / 2 + "px";
const middlePosY = middlePos.y - animation.offsetHeight / 1.5 + "px";

const contactStop = document.getElementById("contact-stop");
const contactPos = getPos(contactStop);
const contactPosX = contactPos.x - animation.offsetWidth / 3 + "px";
const contactPosY = contactPos.y + "px";

const bottomStop = document.getElementById("bottom-stop");
const bottomPos = getPos(bottomStop);
const bottomPosX = bottomPos.x - animation.offsetWidth / 2 + "px";
const bottomPosY = bottomPos.y - animation.offsetHeight / 1.5 + "px";

const bg = document.getElementById("bg-wrapper");

window.onscroll = function () {
  // scroll start
  if (getScrollPercent() > 2) {
    header.classList.add("header-scrolled");
    footer.classList.add("footer-scrolled");
  } else {
    // top reset
    header.classList.remove("header-scrolled");
    footer.classList.remove("footer-scrolled");

    bg.classList.remove("bg-about");
    bg.classList.remove("bg-icons");
    bg.classList.remove("bg-video");
    bg.classList.remove("bg-contact");

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-middle");
    animation.classList.remove("scrolled-contact");

    animation.style.left = "";
    animation.style.top = "";
  }
  // about section
  if (getScrollPercent() > 15 && getScrollPercent() < 32) {
    animation.classList.add("scrolled-about");

    animation.style.left = aboutPosX;
    animation.style.top = aboutPosY;

    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-middle");
    animation.classList.remove("scrolled-contact");

    bg.classList.add("bg-about");
    // bg.classList.remove("bg-about");
    bg.classList.remove("bg-icons");
    bg.classList.remove("bg-video");
    bg.classList.remove("bg-contact");
  }
  // icons section
  if (getScrollPercent() > 32 && getScrollPercent() < 50) {
    animation.classList.add("scrolled-icons");
    animation.style.left = iconsPosX;
    animation.style.top = iconsPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-middle");
    animation.classList.remove("scrolled-contact");

    bg.classList.add("bg-icons");

    bg.classList.remove("bg-about");
    // bg.classList.remove("bg-icons");
    bg.classList.remove("bg-video");
    bg.classList.remove("bg-contact");
  }
  // video seciton
  if (getScrollPercent() > 50 && getScrollPercent() < 70) {
    animation.classList.add("scrolled-icons");
    animation.style.left = videoPosX;
    animation.style.top = videoPosY;
    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-middle");
    animation.classList.remove("scrolled-contact");

    bg.classList.add("bg-video");
    bg.classList.remove("bg-about");
    bg.classList.remove("bg-icons");
    // bg.classList.remove("bg-video");
    bg.classList.remove("bg-contact");
  }
  // ?middle link
  if (getScrollPercent() > 65 && getScrollPercent() < 75) {
    animation.classList.add("scrolled-middle");
    // animation.classList.add("scrolled-middle");

    animation.style.left = middlePosX;
    animation.style.top = middlePosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-contact");

    bg.classList.remove("bg-about");
    bg.classList.remove("bg-icons");
    bg.classList.remove("bg-video");
    bg.classList.remove("bg-contact");
  }
  //     contact
  if (getScrollPercent() > 75 && getScrollPercent() < 95) {
    animation.classList.add("scrolled-contact");

    animation.style.left = contactPosX;
    animation.style.top = contactPosY;

    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-middle");
    bg.classList.add("bg-contact");
    bg.classList.remove("bg-about");
    bg.classList.remove("bg-icons");
    bg.classList.remove("bg-video");
    //  bg.classList.remove("bg-contact");
  }
  if (getScrollPercent() > 95) {
    bg.classList.add("bg-video");
    animation.classList.add("scrolled-middle");
    animation.style.left = bottomPosX;
    animation.style.top = bottomPosY;
    animation.classList.remove("scrolled-about");
    animation.classList.remove("scrolled-icons");
    animation.classList.remove("scrolled-contact");

    bg.classList.remove("bg-about");
    bg.classList.remove("bg-icons");
    bg.classList.remove("bg-video");
    bg.classList.remove("bg-contact");
  }
};

// smooth scroll
// from traversy media
$("a").on("click", function (e) {
  if (this.hash !== "") {
    // console.log(e.target);
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

// scroll top on refresh
$(window).on("unload", function () {
  $(window).scrollTop(0);
});

// const page = document.getElementById("page-wrapper");
// function reveal(){
//   startTime = new Date();
// }

const itemsLeft = document.getElementsByClassName("hide-left");
const itemsRight = document.getElementsByClassName("hide-right");
// const itemsLeft = document.querySelectorAll("hide-left");

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

function run() {
  for (let i = 0; i < itemsLeft.length; i++) {
    if (isInViewport(itemsLeft[i])) {
      itemsLeft[i].classList.add("show-from-left");
    }
  }
  for (let i = 0; i < itemsRight.length; i++) {
    if (isInViewport(itemsRight[i])) {
      itemsRight[i].classList.add("show-from-right");
    }
  }
}
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);
