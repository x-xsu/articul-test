const accordions = document.querySelectorAll(".js-accordion");

if (accordions) {
  for (const accordionItem of accordions) {
    accordionItem.addEventListener("click", function () {
      const panel = this.parentNode.nextElementSibling;
      if (panel.style.maxHeight) {
        this.setAttribute("aria-expanded", false);
        panel.style.maxHeight = null;
      } else {
        this.setAttribute("aria-expanded", true);
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
