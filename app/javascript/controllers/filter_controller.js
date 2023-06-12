import { Controller } from "@hotwired/stimulus";

let jobList = document.querySelectorAll(".gigs-row");
export default class extends Controller {
  showAll() {
    jobList.forEach((a) => {
      a.classList = "";
      a.classList.add("gigs-row", "show-in-jobs");
    });
  }
  showActor() {
    jobList.forEach((a) => {
      a.classList = "";
      a.classList.add("gigs-row", "show-only-actor");
    });
  }
  showDirector() {
    jobList.forEach((a) => {
      a.classList = "";
      a.classList.add("gigs-row", "show-only-director");
    });
  }
  showTexter() {
    jobList.forEach((a) => {
      a.classList = "";
      a.classList.add("gigs-row", "show-only-texter");
    });
  }
}
