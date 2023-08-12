document.addEventListener("DOMContentLoaded", function () {
    const videoCarousel = document.querySelector(".video-carousel");
    const videoPrev = document.querySelector(".video-prev");
    const videoNext = document.querySelector(".video-next");
  
    let isTouching = false;
  
    videoCarousel.addEventListener("touchstart", () => {
      isTouching = true;
      videoPrev.style.opacity = "1";
      videoNext.style.opacity = "1";
    });
  
    videoCarousel.addEventListener("touchend", () => {
      isTouching = false;
      videoPrev.style.opacity = "0";
      videoNext.style.opacity = "0";
    });
  
    // Para cerrar las flechas si el usuario toca fuera del carrusel
    document.addEventListener("touchstart", (event) => {
      if (!event.target.closest(".video-carousel")) {
        videoPrev.style.opacity = "0";
        videoNext.style.opacity = "0";
      }
    });
  });
  