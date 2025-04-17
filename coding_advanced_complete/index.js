document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // 基本的な設定
    slidesPerView: 1,
    breakpoints: {
      821: {
        slidesPerView: 2,
      },
    },
    loop: true, // ループさせる
    pagination: {
      el: ".swiper-pagination", // ページネーションの要素
      clickable: true, // クリック可能にする
    },
    navigation: {
      nextEl: ".swiper-button-next", // 次へボタン
      prevEl: ".swiper-button-prev", // 前へボタン
    },
    autoplay: {
      delay: 3000, // 3秒ごとにスライド
      disableOnInteraction: false, // ユーザー操作後も再開する
    },
  });
});

$(document).ready(function () {
  $(".trigger").on("click", function () {
    $(this).nextAll().slideToggle(200);
  });
});

let fadeInTarget = document.querySelectorAll(".fadein-items");
window.addEventListener("scroll", () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 100) {
      fadeInTarget[i].classList.add("js-active");
    }
    if (scroll < offset - windowHeight) {
      fadeInTarget[i].classList.remove("js-active");
    }
  }
});
