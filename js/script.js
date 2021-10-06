let $buttons = document.querySelectorAll("button");

$buttons.forEach((button) =>
  button.addEventListener("click", () => {
    let sede = button.id;
    switch (sede) {
      case "moron":
        location.href = "sede_moron.html";
        break;
      case "ramos":
        location.href = "sede_ramos.html";
        break;
      case "san-justo":
        location.href = "sede_sanJusto.html";
        break;
      case "ituz":
        location.href = "sede_ituzaingo.html";
        break;
    }
  })
);
