/*-----------------------------
-----Mobile Menu Function-----
-----------------------------*/
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  const expanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", !expanded);
});

/*-----------------------------
---Accordion menu Function-----
-----------------------------*/
window.addEventListener("DOMContentLoaded", function () {
  var accordionItems = document.getElementsByClassName("accordion-item");

  // Open the first item by default
  accordionItems[0].classList.add("active");
  accordionItems[0].querySelector(".accordion-content").style.display = "block";

  // Add click event listener to each accordion item
  Array.prototype.forEach.call(accordionItems, function (item) {
    var header = item.querySelector(".accordion-header");
    var content = item.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      // Toggle active class and display content
      var isActive = item.classList.contains("active");

      Array.prototype.forEach.call(accordionItems, function (item) {
        item.classList.remove("active");
        item.querySelector(".accordion-content").style.display = "none";
      });

      if (!isActive) {
        item.classList.add("active");
        content.style.display = "block";
      }
    });
  });
});
