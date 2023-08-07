import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["actorRow", "directorRow", "texterRow"];

  showAll() {
    this.actorRowTarget.hidden = false;
    this.directorRowTarget.hidden = false;
    this.texterRowTarget.hidden = false;
  }

  showActor() {
    this.actorRowTarget.hidden = false;
    this.directorRowTarget.hidden = true;
    this.texterRowTarget.hidden = true;
  }

  showDirector() {
    this.actorRowTarget.hidden = true;
    this.directorRowTarget.hidden = false;
    this.texterRowTarget.hidden = true;
  }

  showTexter() {
    this.actorRowTarget.hidden = true;
    this.directorRowTarget.hidden = true;
    this.texterRowTarget.hidden = false;
  }
}
