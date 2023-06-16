import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button"];

  connect() {
    // Initialize the active button based on the data-active attribute
    const activeButton = this.element.querySelector("[data-active]");
    if (activeButton) {
      this.activateButton(activeButton);
    } else {
      // Apply border to "btn-all" if no button is marked as active
      const btnAll = this.buttonTargetAll;
      if (btnAll) {
        this.activateButton(btnAll);
      }
    }
  }

  activateButton(button) {
    this.buttonTargets.forEach((btn) => {
      btn.classList.remove("btn-border-active");
      btn.classList.add("btn-border-off");
    });

    button.classList.remove("btn-border-off");
    button.classList.add("btn-border-active");
  }

  all() {
    this.activateButton(this.buttonTargetAll);
    this.actorBorderOff();
    this.directorBorderOff();
    this.texterBorderOff();
  }

  actor() {
    this.activateButton(this.buttonTargetActor);
    this.directorBorderOff();
    this.texterBorderOff();
    this.allBorderOff();
  }

  director() {
    this.activateButton(this.buttonTargetDirector);
    this.texterBorderOff();
    this.allBorderOff();
    this.actorBorderOff();
  }

  texter() {
    this.activateButton(this.buttonTargetTexter);
    this.allBorderOff();
    this.actorBorderOff();
    this.directorBorderOff();
  }

  allBorderOff() {
    this.buttonTargetAll.classList.remove("btn-border-active");
    this.buttonTargetAll.classList.add("btn-border-off");
  }

  actorBorderOff() {
    this.buttonTargetActor.classList.remove("btn-border-active");
    this.buttonTargetActor.classList.add("btn-border-off");
  }

  directorBorderOff() {
    this.buttonTargetDirector.classList.remove("btn-border-active");
    this.buttonTargetDirector.classList.add("btn-border-off");
  }

  texterBorderOff() {
    this.buttonTargetTexter.classList.remove("btn-border-active");
    this.buttonTargetTexter.classList.add("btn-border-off");
  }

  get buttonTargetAll() {
    return this.buttonTargets.find((btn) => btn.id === "btn-all");
  }

  get buttonTargetActor() {
    return this.buttonTargets.find((btn) => btn.id === "btn-actor");
  }

  get buttonTargetDirector() {
    return this.buttonTargets.find((btn) => btn.id === "btn-director");
  }

  get buttonTargetTexter() {
    return this.buttonTargets.find((btn) => btn.id === "btn-texter");
  }
}
