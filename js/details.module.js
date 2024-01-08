import { Ui } from "./display.module.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    document.querySelector("#closeBtn").addEventListener("click", () => {
      document.querySelector(".details").classList.add("d-none");
      document.querySelector(".games").classList.remove("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c6ad0918famsh436a4c669b82476p162795jsne12883e756ca",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    this.ui.displayDetails(data);
  }
}
