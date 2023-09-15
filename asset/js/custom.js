const circle = document.querySelectorAll(".sigledata");

const ob = new IntersectionObserver(
  (circle) => {
    circle.forEach((item) => {
      if (item.isIntersecting) {
        console.log(`${item.target} is visble`);
        item.target.classList.add("mystyle");
      } else {
        item.target.classList.remove("mystyle");
        console.log(`${item.target} not visaile`);
      }
    });
  },
  { threshold: 1 }
);

circle.forEach((item) => ob.observe(item));

// ob.observe(circle);
