import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="banner"
export default class extends Controller {
  static targets = ["banner", "linkFirst", "linkMiddle", "linkLast"];

  pausedAnimation() {
    const linkFirst = this.linkFirstTarget;
    const linkMiddle = this.linkMiddleTarget;
    const linkLast = this.linkLastTarget;
    linkFirst.style.animationPlayState = "paused";
    linkMiddle.style.animationPlayState = "paused";
    linkLast.style.animationPlayState = "paused";
  }
  runAnimation() {
    const linkFirst = this.linkFirstTarget;
    const linkMiddle = this.linkMiddleTarget;
    const linkLast = this.linkLastTarget;
    linkFirst.style.animationPlayState = "running";
    linkMiddle.style.animationPlayState = "running";
    linkLast.style.animationPlayState = "running";
  }
}
