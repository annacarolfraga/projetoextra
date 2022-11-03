let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true/pt-br`;
  let lang = 'https://restcountries.com/v2/lang/pt-br'
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="containerr">
            <div class="data-container">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="conatinerr">
            <div class="data-container">
                <h4>Continente:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="containerr">
            <div class="data-container">
                <h4>População:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
         <div class="containerr">
            <div class="data-container">
                <h4>Idiomas:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>Preencha o campo</h3>`;
      } else {
        result.innerHTML = `<h3>Por favor, escreva um nome de país válido.</h3>`;
      }
    });
});