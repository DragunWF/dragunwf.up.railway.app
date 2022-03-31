$(document).ready(() => {
  const gitHub = { id: $("#gitHub"), color: "green" };
  const itch = { id: $("#itch"), color: "#E18AAA" };
  const steam = { id: $("#steam"), color: "#03a9f4" };
  const codeWars = { id: $("#codeWars"), color: "#9b111E" };
  const typeRacer = { id: $("#typeRacer"), color: "#F9C70C" };
  const defaultColor = "purple";

  function changeOverlayColor(color) {
    $("body").get(0).style.setProperty("--overlay-color", color);
  }

  $(gitHub.id).hover(() => {
    changeOverlayColor(gitHub.color);
  });

  $(itch.id).hover(() => {
    changeOverlayColor(itch.color);
  });

  $(steam.id).hover(() => {
    changeOverlayColor(steam.color);
  });

  $(codeWars.id).hover(() => {
    changeOverlayColor(codeWars.color);
  });

  $(typeRacer.id).hover(() => {
    changeOverlayColor(typeRacer.color);
  });

  $(".social-item").mouseout(() => {
    $("body").get(0).style.setProperty("--overlay-color", defaultColor);
  });
});
