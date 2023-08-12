document.addEventListener("DOMContentLoaded", function () {
  const videoTrack = document.querySelector(".video-track");
  const videoItems = document.querySelectorAll(".video-item");
  const videoPrev = document.querySelector(".video-prev");
  const videoNext = document.querySelector(".video-next");

  let currentIndex = 0;

  videoPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = videoItems.length - 1;
    }
    updateVideoTrack();
  });

  videoNext.addEventListener("click", () => {
    if (currentIndex < videoItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateVideoTrack();
  });

  function updateVideoTrack() {
    const itemWidth = videoItems[currentIndex].offsetWidth;
    videoTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

