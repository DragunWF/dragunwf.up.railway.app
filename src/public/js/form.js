$(document).ready(() => {
  const submit = $("#submit");
  const reset = $("#reset");
  const formName = $("#formName");
  const formTextArea = $("#formTextArea");

  submit.click(() => {
    const messageLength = formTextArea.val().length;
    const nameLength = formName.val().length;

    if (!messageLength) 
      alert("Your message is empty!");
    else if (messageLength < 5) 
      alert("Your message is too short!");
    else if (messageLength > 2000)
      alert("Your message must be below 2000 characters!");
    else if (nameLength > 50) 
      alert("Your name must be below 50 characters!");
    else {
      if (!nameLength) formName.val("Anonymous");
      submit.attr("type", "submit");
    }
  });

  reset.click(() => {
    formName.val("");
    formTextArea.val("");
  });
});
