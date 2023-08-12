document.addEventListener("DOMContentLoaded", function () {
    const videoCarousel = document.querySelector(".video-carousel");
    const videoPrev = document.querySelector(".video-prev");
    const videoNext = document.querySelector(".video-next");
  
    videoCarousel.addEventListener("mouseenter", () => {
      videoPrev.style.opacity = "1";
      videoNext.style.opacity = "1";
    });
  
    videoCarousel.addEventListener("mouseleave", () => {
      videoPrev.style.opacity = "0";
      videoNext.style.opacity = "0";
    });
  });