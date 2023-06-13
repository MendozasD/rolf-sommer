import { Controller } from "@hotwired/stimulus";

// BUTTON FILTERING SELECTION BORDER
let filterButtonAll = document.getElementById("btn-all");
let filterButtonActor = document.getElementById("btn-actor");
let filterButtonDirector = document.getElementById("btn-director");
let filterButtonTexter = document.getElementById("btn-texter");

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

function borderFilter(a, b, c, d) {
  a.className = "";
  b.className = "";
  c.className = "";
  d.className = "";
  a.classList.add("btn-border-active");
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
    borderFilter(
      filterButtonAll,
      filterButtonActor,
      filterButtonDirector,
      filterButtonTexter
    );
  }
  showActor() {
    document.getElementById("actor-row").classList.add("display-list");
    hideDirector();
    hideTexter();
    borderFilter(
      filterButtonActor,
      filterButtonAll,
      filterButtonDirector,
      filterButtonTexter
    );
  }

  showDirector() {
    document.getElementById("director-row").classList.add("display-list");
    hideActor();
    hideTexter();
    borderFilter(
      filterButtonDirector,
      filterButtonActor,
      filterButtonAll,
      filterButtonTexter
    );
  }
  showTexter() {
    document.getElementById("texter-row").classList.add("display-list");
    hideActor();
    hideDirector();
    borderFilter(
      filterButtonTexter,
      filterButtonActor,
      filterButtonAll,
      filterButtonDirector
    );
  }
}
