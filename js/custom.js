$(document).ready(function () {
  $(".navbar-light .dmenu").hover(
    function () {
      $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
    },
    function () {
      $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
    }
  );
});
// Mega Menu Slider JS Start
(function () {
  const MOBILE_BREAKPOINT = 1199;

  const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

  /* ==================================================
     🔥 HARD BLOCK BOOTSTRAP DROPDOWN (CAPTURE PHASE)
  ================================================== */
  document.addEventListener(
    "click",
    function (e) {
      const toggle = e.target.closest(".dropdown-toggle");

      if (!toggle) return;

      if (isMobile()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    },
    true // 👈 CAPTURE PHASE (THIS IS THE KEY)
  );

  /* ==================================================
     MOBILE CLICK MENU
  ================================================== */
  document.querySelectorAll(".dmenu > a").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (!isMobile()) return;

      e.preventDefault();
      e.stopPropagation();

      const currentMenu = this.nextElementSibling;

      // close all others
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== currentMenu) {
          menu.style.display = "none";
        }
      });

      // toggle current
      currentMenu.style.display =
        currentMenu.style.display === "block" ? "none" : "block";
    });
  });

  /* ==================================================
     CLICK INSIDE MENU SAFE
  ================================================== */
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  /* ==================================================
     OUTSIDE CLICK CLOSE (MOBILE)
  ================================================== */
  document.addEventListener("click", function () {
    if (isMobile()) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.display = "none";
      });
    }
  });
  const mobileNav = document.getElementById("mobile_nav");
const toggler = document.querySelector(".navbar-toggler");

if (mobileNav && toggler) {
  toggler.addEventListener("click", () => {
    setTimeout(() => {
      if (mobileNav.classList.contains("show")) {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }
    }, 50);
  });
}
const closeBtn = document.querySelector(".menu-close");

if (closeBtn && mobileNav) {
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // close sub menus first
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.display = "none";
    });

    // start slide-out animation
    mobileNav.classList.remove("show");

    // wait for animation to finish
    setTimeout(() => {
      document.body.classList.remove("menu-open");
    }, 300); // 👈 must match CSS transition time
  });
}


// Mega Menu Slider JS End
  /* ==================================================
     DESKTOP HOVER
  ================================================== */
  document.querySelectorAll(".dmenu").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      if (!isMobile()) {
        const menu = this.querySelector(".dropdown-menu");
        if (menu) menu.style.display = "block";
      }
    });

    item.addEventListener("mouseleave", function () {
      if (!isMobile()) {
        const menu = this.querySelector(".dropdown-menu");
        if (menu) menu.style.display = "none";
      }
    });
  });

  /* ==================================================
     RESIZE RESET
  ================================================== */
  window.addEventListener("resize", function () {
    if (!isMobile()) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.style.removeProperty("display");
      });
    }
  });
})();

var swiper = new Swiper(".testimonials-slider", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },

    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});

// Counter
function runCounter($el) {
  const targetText = $el.text().trim();
  const targetNumber = parseInt(targetText.replace(/\D/g, ""), 10);
  const suffix = targetText.replace(/[0-9]/g, "");

  let count = 0;
  const duration = 1000; // 3 seconds total
  const frameRate = 120;
  const totalFrames = Math.round(duration / (1000 / frameRate));
  const increment = targetNumber / totalFrames;

  const timer = setInterval(() => {
    count += increment;
    if (count >= targetNumber) {
      count = targetNumber;
      clearInterval(timer);
    }
    $el.text(Math.floor(count) + suffix);
  }, 1000 / frameRate);
}

// Observe when .global-presence-card elements come into view
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const $span = $(entry.target).find("#NumberCounter");
        if (!$span.data("counted")) {
          // Prevent re-running
          runCounter($span);
          $span.data("counted", true);
        }
        obs.unobserve(entry.target); // Stop observing once done
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% visible

$(".global-presence-card").each(function () {
  observer.observe(this);
});
$(".about-ves-card").each(function () {
  observer.observe(this);
});

// Hero Slider
const titles = [
  "Advanced Auto Parts QC and Sorting",
  "Laser Engraving with Automation",
  "Laser Welding & Cutting Automation",
  "Laser Diamond Cutting",
];

new Swiper(".hero-slider-main", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet(index, className) {
      return `<span class="${className}" data-title="${titles[index]}"></span>`;
    },
  },
});

// Product Video Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  loop: true,
  loopedSlides: 4,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  loopedSlides: 4,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


const thumbsSwiper = new Swiper('.facility-thumbs', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: 12,
    watchSlidesProgress: true,
});

const mainSwiper = new Swiper('.facility-main', {
    loop: true,
    speed: 700,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: thumbsSwiper,
    },
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const submenu = document.querySelector(".submenu");

  // Toggle on menu click
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // 🔑 very important
    submenu.classList.toggle("open");
  });

  // Click outside → close
  document.addEventListener("click", () => {
    submenu.classList.remove("open");
  });
});

