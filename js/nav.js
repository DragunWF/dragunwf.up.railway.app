$(document).ready(() => {
  const menuToggle = $(".toggle");
  const showcase = $(".home-content");

  menuToggle.click(() => {
    menuToggle.toggleClass("active");
    showcase.toggleClass("active");
  });
});
