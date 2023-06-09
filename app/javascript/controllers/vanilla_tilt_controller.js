import { Controller } from "@hotwired/stimulus";
import VanillaTilt from "vanilla-tilt";

// Connects to data-controller="vanilla-tilt"
export default class extends Controller {
  tilt() {
    const element = document.querySelector(".js-tilt");
    VanillaTilt.init(element);
  }
}
