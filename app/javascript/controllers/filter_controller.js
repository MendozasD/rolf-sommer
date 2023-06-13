import { Controller } from "@hotwired/stimulus";

function showAll() {
  document.getElementById("actor-row").classList.add("display-list");
  document.getElementById("director-row").classList.add("display-list");
  document.getElementById("texter-row").classList.add("display-list");
}

function clearAll() {
  document.getElementById("actor-row").className = "";
  document.getElementById("director-row").className = "";
  document.getElementById("texter-row").className = "";
}

function hideDirector() {
  let dd = document.getElementById("director-row");
  dd.className = "";
  dd.classList.add("display-list-not");
}
function hideTexter() {
  let dd = document.getElementById("texter-row");
  dd.className = "";
  dd.classList.add("display-list-not");
}
function hideActor() {
  let dd = document.getElementById("actor-row");
  dd.className = "";
  dd.classList.add("display-list-not");
}

export default class extends Controller {
  showAll() {
    clearAll();
    showAll();
  }
  showActor() {
    document.getElementById("actor-row").classList.add("display-list");
    hideDirector();
    hideTexter();
  }

  showDirector() {
    document.getElementById("director-row").classList.add("display-list");
    hideActor();
    hideTexter();
  }
  showTexter() {
    document.getElementById("texter-row").classList.add("display-list");
    hideActor();
    hideDirector();
  }
}
