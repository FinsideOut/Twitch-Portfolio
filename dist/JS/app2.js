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
  $("body").hide();
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
  console.log(about.offsetTop - animation.offsetHeight / 2);
  console.log(about.offsetTop);
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
      "translateY(" + (about.offsetTop + animation.offsetHeight / 2) + "px)";
    animation.style.transform += "translateX(" + vw(50) + "px)";
  } else if (
    window.scrollY >= icons.offsetTop - vh(30) &&
    window.scrollY < videos.offsetTop - vh(30)
  ) {
    animation.style.transform =
      "translateY(" + (icons.offsetTop + animation.offsetHeight / 4) + "px)";
  } else if (
    window.scrollY >= videos.offsetTop - vh(30) &&
    window.scrollY < middleLink.offsetTop - vh(70)
  ) {
    animation.style.transform =
      "translateY(" + (videos.offsetTop + vh(20)) + "px)";
    animation.style.transform += "translateX(" + vw(20) + "px)";
    animation.style.transform += "scale(1.4)";
  } else if (
    window.scrollY >= middleLink.offsetTop - vh(70) &&
    window.scrollY < contact.offsetTop - vh(30)
  ) {
    animation.style.transform =
      "translateY(" +
      (middleLink.offsetTop + vh(10) - animation.offsetHeight) +
      "px)";
    animation.style.transform +=
      "translateX(" +
      (middleLink.offsetLeft +
        middleLink.offsetWidth / 2 -
        animation.offsetWidth / 2 -
        vw(5)) +
      "px)";
    animation.style.transform += "scale(0.5)";
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
      (bottomLink.offsetTop + vh(10) - animation.offsetHeight) +
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
// const bg = document.getElementById("bg");
// const bgWrapper = document.getElementById("bg-wrapper");
// scroll stuff
// const aboutStop = document.getElementById("about-stop");
// const aboutPos = getPos(aboutStop);
// const aboutPosX = aboutPos.x - animation.offsetWidth / 4 + "px";
// const aboutPosY = aboutPos.y - animation.offsetHeight / 2 + "px";

// const iconsStop = document.getElementById("icons-stop");
// const iconsPos = getPos(iconsStop);
// const iconsPosX = iconsPos.x - animation.offsetWidth / 2 + "px";
// const iconsPosY = iconsPos.y - animation.offsetHeight / 2 + "px";

// const videoStop = document.getElementById("video-stop");
// const videoPos = getPos(videoStop);
// const videoPosX = videoPos.x + animation.offsetWidth / 4 + "px";
// const videoPosY = videoPos.y - animation.offsetHeight * 1.5 + "px";

// const middleStop = document.getElementById("middle-stop");
// const middlePos = getPos(middleStop);
// const middlePosX = middlePos.x - animation.offsetWidth / 2 + "px";
// const middlePosY = middlePos.y - animation.offsetHeight + "px";

// const contactStop = document.getElementById("contact-stop");
// const contactPos = getPos(contactStop);
// const contactPosX = contactPos.x - animation.offsetWidth / 3 + "px";
// const contactPosY = contactPos.y + "px";

// const bottomStop = document.getElementById("bottom-stop");
// const bottomPos = getPos(bottomStop);
// const bottomPosX = bottomPos.x - animation.offsetWidth / 2 + "px";
// const bottomPosY = bottomPos.y - animation.offsetHeight + "px";

// function getScrollPercent() {
//   var h = document.documentElement,
//     b = document.body,
//     st = "scrollTop",
//     sh = "scrollHeight";
//   // console.log(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);
//   return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
// }
// function getPos(el) {
//   // from
//   // https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
//   for (
//     var lx = 0, ly = 0;
//     el != null;
//     lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
//   );
//   return { x: lx, y: ly };
// }

//     bgWrapper.classList.remove("bg-about");
//     bgWrapper.classList.remove("bg-icons");
//     bgWrapper.classList.remove("bg-video");
//     bgWrapper.classList.remove("bg-contact");

//     animation.classList.remove("scrolled-about");
//     animation.classList.remove("scrolled-icons");
//     animation.classList.remove("scrolled-middle");
//     animation.classList.remove("scrolled-contact");

//     animation.style.transform = "none";
//   }
//   // about section
//   if (getScrollPercent() > 5 && getScrollPercent() < 23) {
//     animation.classList.add("scrolled-about");

//     animation.style.transform =
//       "translateX(" + aboutPosX + ") translateY(" + aboutPosY + ") scale(1.3)";
//     animation.classList.remove("scrolled-icons");
//     animation.classList.remove("scrolled-middle");
//     animation.classList.remove("scrolled-contact");

//     bgWrapper.classList.add("bg-about");

//     bgWrapper.classList.remove("bg-icons");
//     bgWrapper.classList.remove("bg-video");
//     bgWrapper.classList.remove("bg-contact");
//   }
//   // icons section
//   if (getScrollPercent() > 23 && getScrollPercent() < 38) {
//     animation.classList.add("scrolled-icons");
//     animation.style.transform =
//       "translateX(" + iconsPosX + ") translateY(" + iconsPosY + ") scale(1.5)";

//     animation.classList.remove("scrolled-about");
//     animation.classList.remove("scrolled-middle");
//     animation.classList.remove("scrolled-contact");

//     bgWrapper.classList.add("bg-icons");

//     bgWrapper.classList.remove("bg-about");
//     bgWrapper.classList.remove("bg-video");
//     bgWrapper.classList.remove("bg-contact");
//   }
//   // video seciton
//   if (getScrollPercent() > 38 && getScrollPercent() < 62) {
//     animation.classList.add("scrolled-icons");
//     animation.style.transform =
//       "translateX(" + videoPosX + ") translateY(" + videoPosY + ")scale(1.4)";

//     animation.classList.remove("scrolled-about");
//     animation.classList.remove("scrolled-middle");
//     animation.classList.remove("scrolled-contact");

//     bgWrapper.classList.add("bg-video");

//     bgWrapper.classList.remove("bg-about");
//     bgWrapper.classList.remove("bg-icons");
//     bgWrapper.classList.remove("bg-contact");
//   }
//   // ?middle link
//   if (getScrollPercent() > 62 && getScrollPercent() < 74) {
//     animation.classList.add("scrolled-middle");
//     animation.style.transform =
//       "translateX(" +
//       middlePosX +
//       ") translateY(" +
//       middlePosY +
//       ") scale(0.5)";

//     animation.classList.remove("scrolled-about");
//     animation.classList.remove("scrolled-icons");
//     animation.classList.remove("scrolled-contact");

//     bgWrapper.classList.remove("bg-about");
//     bgWrapper.classList.remove("bg-icons");
//     bgWrapper.classList.remove("bg-video");
//     bgWrapper.classList.remove("bg-contact");
//   }
//   //     contact
//   if (getScrollPercent() > 74 && getScrollPercent() < 90) {
//     animation.classList.add("scrolled-contact");
//     animation.style.transform =
//       "translateX(" +
//       contactPosX +
//       ") translateY(" +
//       contactPosY +
//       ") scale(1.5)";

//     animation.classList.remove("scrolled-about");
//     animation.classList.remove("scrolled-icons");
//     animation.classList.remove("scrolled-middle");

//     bgWrapper.classList.add("bg-contact");

//     bgWrapper.classList.remove("bg-about");
//     bgWrapper.classList.remove("bg-icons");
//     bgWrapper.classList.remove("bg-video");
//   }
//   // bottom
//   if (getScrollPercent() > 90) {
//     animation.classList.add("scrolled-middle");
//     animation.style.transform =
//       "translateX(" +
//       bottomPosX +
//       ") translateY(" +
//       bottomPosY +
//       ") scale(0.5)";

//     animation.classList.remove("scrolled-about");
//     animation.classList.remove("scrolled-icons");
//     animation.classList.remove("scrolled-contact");

//     bgWrapper.classList.remove("bg-about");
//     bgWrapper.classList.remove("bg-icons");
//     bgWrapper.classList.remove("bg-video");
//     bgWrapper.classList.remove("bg-contact");
//   }
// };

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
