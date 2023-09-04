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
  showAll() {
    showThem("listing-jobs");
  }

  showActor() {
    showThem("listing-jobs");
    hideTexter("texter-list");
    hideDirector("director-list");
  }

  showDirector() {
    showThem("listing-jobs");
    hideActor("actor-list");
    hideTexter("texter-list");
  }

  showTexter() {
    showThem("listing-jobs");
    hideDirector("director-list");
    hideActor("actor-list");
  }
}
