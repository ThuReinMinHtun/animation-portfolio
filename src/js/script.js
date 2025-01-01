document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector("button");
    const content = item.querySelector(".accordion-content");
    const vLine = item.querySelector(".v-line");
    const div = item.querySelector(".line");

    button.addEventListener("click", () => {
      const isOpen = button.classList.contains("active");

      // Close all accordions
      accordionItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector("button");
        const otherContent = otherItem.querySelector(".accordion-content");
        const otherVLine = otherItem.querySelector(".v-line");

        otherButton.classList.remove("active");
        otherContent.style.height = "0";
        otherVLine.style.opacity = "1";
      });

      // Toggle current accordion
      if (!isOpen) {
        button.classList.add("active");
       div.classList.remove("hidden");
        content.style.height = content.scrollHeight + "px";
        vLine.style.opacity = "0";
      } else {
        button.classList.remove("active");
        div.classList.add("hidden");
        content.style.height = "0";
        vLine.style.opacity = "1";
      }
    });
  });
});
