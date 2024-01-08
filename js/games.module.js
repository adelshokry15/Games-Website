import { Ui } from "./display.module.js";
import { Details } from "./details.module.js";
export class Games {
  constructor() {
    this.getGames("mmorpg");
    document.querySelectorAll(".games .navbar-nav li a").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelectorAll(".games .navbar-nav li a").forEach((link) => {
          link.classList.remove("active");
        });
        e.target.classList.add("active");
        this.getGames(e.target.textContent);
      });
    });
    this.ui = new Ui();
    this.Details = new Details();
  }
  async getGames(cat) {
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".loading").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c6ad0918famsh436a4c669b82476p162795jsne12883e756ca",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.ui.displayDataGame(data);
    document.querySelector(".games").classList.remove("d-none");
    document.querySelector(".loading").classList.add("d-none");
    this.fetchDetails();
  }
  fetchDetails() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        this.Details.getDetails(id);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
      });
    });
  }
}
