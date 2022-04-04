$(document).ready(() => {
  const next = $("#next");
  const back = $("#back");
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

  function onPageLoad() {
    const hiddenContents = ["#about-header", "#p0", ".about-buttons"];
    for (let element of hiddenContents) $(element).hide();
    for (let content of hiddenContents) $(content).fadeIn(850);
  }

  next.click(() => {
    infoIndex++;
    updateAboutText();
  });

  back.click(() => {
    infoIndex--;
    updateAboutText();
  });

  onPageLoad();
});
