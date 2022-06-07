$(document).ready(() => {
  const next = $("#next");
  const back = $("#back");
  let currentId = "#p0";
  let infoIndex = 0;

  function updateAboutText() {
    const indexLimit = 7;
    if (infoIndex > indexLimit) infoIndex = 0;
    else if (infoIndex < 0) infoIndex = indexLimit;

    $(currentId).fadeOut(350, () => {
      $(`#p${infoIndex}`).fadeIn(350);
    });
    currentId = `#p${infoIndex}`;
  }

  next.click(() => {
    infoIndex++;
    updateAboutText();
  });

  back.click(() => {
    infoIndex--;
    updateAboutText();
  });
});
