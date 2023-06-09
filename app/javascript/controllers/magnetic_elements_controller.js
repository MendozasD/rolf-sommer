import { Controller } from "@hotwired/stimulus";
import { MagneticElementsController } from "@toon.rombaut/magnetic-elements";

// Connects to data-controller="magnetic-elements"
export default class extends Controller {
  magnet() {
    const magneticElementsController = new MagneticElementsController({
      standalone: false,
      triggerArea: 25,
      interpolationFactor: 0.5,
      magneticForce: 0.5,
    });
  }
}
