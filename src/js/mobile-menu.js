const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
let isMenuOpen = false;

mobileMenuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    // Show menu with animation
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu.classList.add("opacity-100", "translate-y-0");
      mobileMenu.classList.remove("opacity-0", "-translate-y-5");
    }, 10); // Delay for smooth animation start
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    // Hide menu with animation
    mobileMenu.classList.remove("opacity-100", "translate-y-0");
    mobileMenu.classList.add("opacity-0", "-translate-y-5");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300); // Match the transition duration
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnButton = mobileMenuButton.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton && isMenuOpen) {
    isMenuOpen = false;
    mobileMenu.classList.remove("opacity-100", "translate-y-0");
    mobileMenu.classList.add("opacity-0", "-translate-y-5");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});
