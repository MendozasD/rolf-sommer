import { Controller } from "@hotwired/stimulus";

function hideActor(className) {
  const elements = document.querySelectorAll("." + className);
  elements.forEach((element) => {
    element.hidden = true;
  });
}

function hideTexter(className) {
  const elements = document.querySelectorAll("." + className);
  elements.forEach((element) => {
    element.hidden = true;
  });
}

function hideDirector(className) {
  const elements = document.querySelectorAll("." + className);
  elements.forEach((element) => {
    element.hidden = true;
  });
}

function showThem(className) {
  const elements = document.querySelectorAll("." + className);
  elements.forEach((element) => {
    element.hidden = false;
  });
}

export default class extends Controller {
  static targets = ["actorRow", "directorRow", "texterRow"];

  showAll() {
    showThem("listing-jobs");
  }

  showActor() {
    hideTexter("texter-list");
    hideDirector("director-list");
    this.actorRowTarget.hidden = false;
  }

  showDirector() {
    hideActor("actor-list");
    hideTexter("texter-list");
    this.directorRowTarget.hidden = false;
  }

  showTexter() {
    hideDirector("director-list");
    hideActor("actor-list");
    this.texterRowTarget.hidden = false;
  }
}
