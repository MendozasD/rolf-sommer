import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="marquee"
export default class extends Controller {
  static targets = ["piece"];
  addMarquee() {
    const stuckTitle = this.pieceTarget;
  }
}
