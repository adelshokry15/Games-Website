export class Ui {
  displayDataGame(data) {
    let gameData = "";
    for (let i = 0; i < data.length; i++) {
      gameData += `<div class="col-md-6 col-lg-4 col-xl-3">
              <div data-id=${data[i].id} class="card h-100 bg-transparent">
                <img
                  src=${data[i].thumbnail}
                  class="card-img-top p-3 pb-0"
                  alt="..."
                />
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h6 class="card-title text-white">${data[i].title}</h6>
                    <span class="bg-primary small p-1 text-white">Free</span>
                  </div>
                  <p class="card-text small text-center">
                    ${data[i].short_description.split(" ", 8)}
                  </p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <span class="text-white px-1 rounded-2">${
                    data[i].genre
                  }</span>
                  <span class="text-white px-1 rounded-2">${
                    data[i].platform
                  }</span>
                </div>
              </div>
            </div>`;
    }
    document.querySelector(".games-content .row").innerHTML = gameData;
  }

  displayDetails(data) {
    let gameDetails = `<div class="col-md-4 mb-4 mb-lg-0">
            <img class="w-100" src=${data.thumbnail} alt="" />
          </div>
          <div class="col-md-8">
            <h1>Title: ${data.title}</h1>
            <p>
              Category:
              <span class="px-2 bg-primary rounded-3 small">${data.genre}</span>
            </p>
            <p>
              Platform:
              <span class="px-2 bg-primary rounded-3 small">${data.platform}</span>
            </p>
            <p>
              Status: <span class="px-2 bg-primary rounded-3 small">${data.status}</span>
            </p>
            <p>${data.description}</p>
            <a href=${data.game_url} target=_blank class="btn btn-outline-warning text-white">
              Show Game
            </a>
          </div>`;
    document.querySelector("#gameDetails").innerHTML = gameDetails;
  }
}
