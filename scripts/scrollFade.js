document.addEventListener("DOMContentLoaded", function () {
      const scrollElements = document.querySelectorAll(".scroll-fade");

      function elementInView(el, offset = 0) {
        const elementTop = el.getBoundingClientRect().top;
        return (
          elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
      }

      function elementOutOfView(el) {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        return elementBottom < 0 || elementTop > window.innerHeight;
      }

      function displayScrollElement(el) {
        el.classList.add("show");
      }

      function hideScrollElement(el) {
        el.classList.remove("show");
      }

      function handleScrollAnimation() {
        scrollElements.forEach((el) => {
          if (elementInView(el, 100)) {
            displayScrollElement(el);
          } else if (elementOutOfView(el)) {
            hideScrollElement(el);
          }
        });
      }

      window.addEventListener("scroll", handleScrollAnimation);
      window.addEventListener("resize", handleScrollAnimation);
      handleScrollAnimation(); // initial check
    });