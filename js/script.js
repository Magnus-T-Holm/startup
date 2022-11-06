function menu() {
    var menu = document.querySelector("#mobile_nav");
    var menu_button = document.querySelector("#mobile_menu_button");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
      menu_button.classList.add("fa-bars");
      menu_button.classList.remove("fa-x");
    } else {
      menu.style.display = "flex";
      menu_button.classList.add("fa-x");
      menu_button.classList.remove("fa-bars");
    }
  }
  