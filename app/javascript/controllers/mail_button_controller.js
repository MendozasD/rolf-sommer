import { Controller } from "@hotwired/stimulus";
const animatedButton = document.getElementById("round-mail");
const innerPath = document.getElementById("mail-round-path");

// Connects to data-controller="mail-button"
export default class extends Controller {
  connect() {
    console.log("Animate Connected");
  }
  mouseOverAnimate() {
    animatedButton.style.animationPlayState = "paused";
  }
  mouseOut() {
    animatedButton.style.animationPlayState = "running";
  }
}
