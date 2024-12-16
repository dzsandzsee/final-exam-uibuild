import books from "./data.js"

const data = books


document.querySelector("#root").insertAdjacentHTML("beforeend", `
    <header>
      <h1>NEW YORK TIMES BESTSELLERS</h1>
    </header>
    <div class="cards">
      ${data.map((data, index) => `
        <div class="card-container">
            <div class="card">
          <span class="number">${index + 1}</span>
          <h3>${(data.sub).toUpperCase()}</h3>
          <h2>${data.title}</h2>
          <p>${data.text}<p>
         
         </div>
         <div class="button-container">
          <button>
            read more 
          </button>
          </div>
        </div>
      `).join("")}
    </div>
  `)


