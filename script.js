const swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const navIcons = document.querySelector('.nav-icons');
  navLinks.classList.toggle('active');
  navIcons.classList.toggle('active');
}



document.addEventListener("DOMContentLoaded", () => {
  let countersStarted = false;

  function startCounters() {
    const counters = [
      { element: document.getElementById("counter1"), target: 1 }, 
      { element: document.getElementById("counter2"), target: 20 },
      { element: document.getElementById("counter3"), target: 78 }, 
      { element: document.getElementById("counter4"), target: 2 }, 
    ];

    counters.forEach((counter) => {
      let count = 0;
      const increment = Math.ceil(counter.target / 100); 
      const interval = setInterval(() => {
        count += increment;
        if (count >= counter.target) {
          count = counter.target;
          clearInterval(interval);
        }

       
        if (counter.target >= 1 && counter.target <= 100 && counter.element.id !== "counter3") {
          counter.element.textContent = `${count}M`; 
        } else {
          counter.element.textContent = count; 
        }
      }, 30);
    });
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  window.addEventListener("scroll", () => {
    if (!countersStarted && isInViewport(document.querySelector(".stats"))) {
      countersStarted = true;
      startCounters();
    }
  });
});



