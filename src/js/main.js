"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const scrollTopButton = document.querySelector(".scroll-top");

  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  scrollTopButton &&
    scrollTopButton.addEventListener("click", handleProgressClick);

  window.addEventListener("scroll", function () {
    let scrollHeight = window.scrollY;

    if (scrollHeight > 500) {
      scrollTopButton && scrollTopButton.classList.add("opacity-1");
      scrollTopButton && scrollTopButton.classList.add("visible");
      scrollTopButton && scrollTopButton.classList.remove("invisible");
      scrollTopButton && scrollTopButton.classList.remove("opacity-0");
    } else {
      scrollTopButton && scrollTopButton.classList.remove("opacity-1");
      scrollTopButton && scrollTopButton.classList.remove("visible");
      scrollTopButton && scrollTopButton.classList.add("invisible");
      scrollTopButton && scrollTopButton.classList.add("opacity-0");
    }
  });

  // Get the current page URL
  const currentUrl = window.location.pathname;

  let withoutSlash;
  if (currentUrl.length > 1) {
    withoutSlash = currentUrl.split("/")[1];
  } else {
    withoutSlash = currentUrl;
  }

  const singleMenu = document.querySelectorAll(".single-menu");

  singleMenu &&
    singleMenu.forEach((item) => {
      const menuItemUrl = item.getAttribute("href");
      if (withoutSlash === menuItemUrl) {
        item.classList.add("active-nav");
      }
    });

  // move button
  document.querySelectorAll(".move-btn").forEach((btn) => {
    const oneItem = btn.querySelector(".one");
    const twoItem = btn.querySelector(".two");

    btn.addEventListener("mouseover", () => {
      const oneWidth = oneItem.offsetWidth;
      const twoWidth = twoItem.offsetWidth;
      oneItem.style.transform = `translateX(${twoWidth}px)`;
      twoItem.style.transform = `translateX(${-oneWidth}px)`;
    });

    btn.addEventListener("mouseout", () => {
      oneItem.style.transform = "none";
      twoItem.style.transform = "none";
    });
  });

  //dropdown
  // Reusable function for show/hide dropdown
  function toggleDropdown(btnId, dropdownId) {
    const dropdownBtn = document.getElementById(btnId);
    const dropdown = document.getElementById(dropdownId);

    if (dropdown.classList.contains("hide")) {
      dropdown.classList.remove("hide");
      dropdown.classList.add("show");
      document.addEventListener("click", closeDropdownOutside);
    } else {
      dropdown.classList.add("hide");
      dropdown.classList.remove("show");
      document.removeEventListener("click", closeDropdownOutside);
    }

    function closeDropdownOutside(event) {
      const isClickedInsideDropdown = dropdown.contains(event.target);
      const isClickedOnDropdownBtn = dropdownBtn.contains(event.target);

      if (!isClickedInsideDropdown && !isClickedOnDropdownBtn) {
        dropdown.classList.add("hide");
        dropdown.classList.remove("show");
        document.removeEventListener("click", closeDropdownOutside);
      }
      const arrow = dropdownBtn.querySelector("#drop-arrow");
      if (arrow) {
        if (dropdown.classList.contains("show")) {
          arrow.classList.add("rotate-180");
        } else {
          arrow.classList.remove("rotate-180");
        }
      }
    }
  }

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  mobileMenuBtn &&
    mobileMenuBtn.addEventListener("click", () =>
      toggleDropdown("mobile-menu-btn", "mobile-menu")
    );

  // swiper js slider
  const brandSlider = new Swiper(".brand-slider", {
    spaceBetween: 24,
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.5,
      },
    },
  });

  const textSlide = new Swiper(".text-slider", {
    spaceBetween: 24,
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3.5,
      },
    },
  });

  const customerSlider = new Swiper(".customer-slider", {
    spaceBetween: 24,
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  const customerSliderReverse = new Swiper(".customer-slider-reverse", {
    spaceBetween: 24,
    speed: 6000,
    loop: true,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  // faq
  let accordion = document.querySelectorAll(".faq-accordion");

  accordion.forEach((item, index) => {
    accordion[index].addEventListener("click", function () {
      let faqAnswer = this.nextElementSibling;
      let parent = accordion[index].parentElement;

      // Close all other accordions
      accordion.forEach((otherAccordion, otherIndex) => {
        if (otherIndex !== index) {
          let otherFaqAnswer = otherAccordion.nextElementSibling;
          otherFaqAnswer.style.height = null;
          otherAccordion.classList.remove("text-primary");
          otherAccordion.classList.remove("pb-6");
          otherAccordion.querySelector("i").classList.remove("ph-minus");
          otherAccordion.querySelector("i").classList.add("ph-plus");
          otherAccordion
            .querySelector("div")
            .classList.remove("border-primary");
          otherAccordion.querySelector("div").classList.add("border-black-4");
        }
      });

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }

      // Toggle classes for the clicked accordion
      accordion[index].classList.toggle("text-primary");
      accordion[index].classList.toggle("pb-6");
      accordion[index].querySelector("i").classList.toggle("ph-plus");
      accordion[index].querySelector("i").classList.toggle("ph-minus");
      accordion[index].querySelector("div").classList.toggle("border-black-4");
      accordion[index].querySelector("div").classList.toggle("border-primary");
    });
  });

  // copy text
  const emailField = document.querySelector(".copy-email");
  emailField.onclick = function () {
    document.execCommand("copy");
  };

  emailField &&
    emailField.addEventListener("copy", function (event) {
      event.preventDefault();
      if (event.clipboardData) {
        event.clipboardData.setData("text/plain", emailField.textContent);
        console.log(event.clipboardData.getData("text"));
      }
    });
});
