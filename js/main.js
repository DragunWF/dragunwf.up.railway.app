$(document).ready(() => {
  const gitHub = { id: "#gitHub", color: "green" };
  const itch = { id: "#itch", color: "#FFA500" };
  const steam = { id: "#steam", color: "#03a9f4" };
  const codeWars = { id: "#codeWars", color: "#9b111E" };
  const typeRacer = { id: "#typeRacer", color: "#F9C70C" };
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
    changeOverlayColor(defaultColor);
  });

  // About Page
  const aboutNext = $("#next");
  const aboutBack = $("#back");
  let currentId = "#p0";
  let infoIndex = 0;

  function updateAboutText() {
    const indexLimit = 4;
    if (infoIndex > indexLimit) infoIndex = 0;
    else if (infoIndex < 0) infoIndex = indexLimit;

    $(currentId).fadeOut(350, () => {
      $(`#p${infoIndex}`).fadeIn(350);
    });
    currentId = `#p${infoIndex}`;
  }

  aboutNext.click(() => {
    console.log("next button clicked");
    infoIndex++;
    updateAboutText();
  });

  aboutBack.click(() => {
    console.log("back button clicked");
    infoIndex--;
    updateAboutText();
  });
});
