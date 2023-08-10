import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="dropdown"
export default class extends Controller {
  connect() {
    const menuList = document.getElementById("menu-list");
    menuList.hidden = true;
  }
  showMenu() {
    const menuList = document.getElementById("menu-list");
    if (menuList.hidden === true) {
      menuList.hidden = false;
    }
  }
  hideMenu() {
    const menuList = document.getElementById("menu-list");
    menuList.hidden = true;
  }
}
