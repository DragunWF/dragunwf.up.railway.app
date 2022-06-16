$(document).ready(() => {
  const secondsTag = $("#seconds");
  let secondsBeforeRedirect = 5;

  function updateSeconds() {
    secondsTag.text(secondsBeforeRedirect.toString());
    if (secondsBeforeRedirect > 0) secondsBeforeRedirect--;
    setTimeout(() => {
      updateSeconds();
    }, 1000);
  }

  function startRedirectTimer() {
    setTimeout(() => {
      window.location = "/contact/form";
    }, 5500);
    updateSeconds();
  }

  startRedirectTimer();
});
