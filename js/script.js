let $buttons = document.querySelectorAll("button");

$buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.id == "moron") {
      location.href = "sede_moron.html";
    }
  })
);
