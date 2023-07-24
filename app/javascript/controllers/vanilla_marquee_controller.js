import { Controller } from "@hotwired/stimulus";
import marquee from "vanilla-marquee";

export default class extends Controller {
  connect() {
    this.startMarquee();
  }

  startMarquee() {
    let elements = this.element.getElementsByClassName("loop-marquee");
    for (let element of elements) {
      new marquee(element, {
        startVisible: true,
        pauseOnHover: true,
        gap: 10,
        speed: 50,
      });
    }
  }
}
