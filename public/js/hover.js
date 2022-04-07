$(document).ready(() => {
  const gitHub = { id: "#gitHub", color: "green" };
  const itch = { id: "#itch", color: "#CC5500" };
  const steam = { id: "#steam", color: "#0f52ba" };
  const codeWars = { id: "#codeWars", color: "#9b111E" };
  const typeRacer = { id: "#typeRacer", color: "#CA1F7B" };
  const defaultColor = "purple";

  function changeOverlayColor(color) {
    $("body").get(0).style.setProperty("--overlay-color", color);
  }

  // Home Page
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

  // Other Pages
  const projectsList = { id: "#projectListBtn", color: "#0f52ba" };
  const moreInfo = { id: "#moreInfoBtn", color: "green" };
  const messageForm = { id: "#messageFormBtn", color: "#9b111E" };

  $(projectsList.id).hover(() => {
    changeOverlayColor(projectsList.color);
  });

  $(moreInfo.id).hover(() => {
    changeOverlayColor(moreInfo.color);
  });

  $(messageForm.id).hover(() => {
    changeOverlayColor(messageForm.color);
  });

  $(".more-btn").mouseout(() => {
    changeOverlayColor(defaultColor);
  });
});
