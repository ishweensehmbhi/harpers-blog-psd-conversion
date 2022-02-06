// Select the Scroll-to-Top button
let scrollToTop = document.querySelector('.backToTop');

// When the user has scrolled past 50px from the top, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTop.style.display = "block";
  }
  else {
    scrollToTop.style.display = "none";
  }
}