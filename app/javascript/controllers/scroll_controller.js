import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["navbar"];

  connect() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll() {
    const navbar = this.navbarTarget;

    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
}
