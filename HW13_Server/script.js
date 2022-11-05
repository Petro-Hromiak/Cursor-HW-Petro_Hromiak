const btnGetInfo = document.getElementById('getInfo');
const btnGetPlanet = document.getElementById('getPlanet');
let numberOfFilm = document.getElementById("inputNumber");
let date = document.getElementById('date');
let planetsUrl = 'https://swapi.dev/api/planets/';

async function getPeople() {
  try {
    const request = await fetch(
      `https://swapi.dev/api/films/${numberOfFilm.value}`,
      {
        method: "GET",
      }
    );
    const response = await request.json();
    let people = [];
    let el = [];
    for (let i = 0; i < response.characters.length; i++) {
      el[i] = await fetch(response.characters[i]);
      people[i] = await el[i].json();
    }
    infoAboutCharacter(people);
  }
  catch (error) {
    alert("Виникла помилка.Введіть номер епізоду в діапазоні від 1 до 6")
  }
};

function infoAboutCharacter(arr) {
  document.getElementById('date').innerHTML = "";
  arr.forEach((el) => {
    if (el.gender.toLowerCase() == "male") {
      el.gender = "♂";
    } else if (el.gender.toLowerCase() == "female") {
      el.gender = "♀";
    } else {
      el.gender = "🤖";
    }
    createDiv("divCharacter").innerHTML = el.name + ". " + el.birth_year + ". " + el.gender;
  });
};

async function getPlanets() {
  try {
    const request = await fetch(planetsUrl, {
      method: 'GET',
    });
    const response = await request.json();
    displayPlanets(response.results);

    let previosButton = createButton('btnNavigation', 'previous');
    let nextButton = createButton('btnNavigation', 'next');

    if (!response.previous) {
      previosButton.style.display = 'none';
    } else {
      previosButton.addEventListener('click', () => {
        planetsUrl = response.previous;
        getPlanets();
      });
    };

    if (!response.next) {
      nextButton.style.display = 'none';
    } else {
      nextButton.addEventListener('click', () => {
        planetsUrl = response.next;
        getPlanets();
      });
    };
  }
  catch (error) {
    alert(error);
  };
};

function createDiv(сlass) {
  let div = document.createElement("div");
  date.append(div);
  div.classList.add(сlass);
  return div;
};

function createButton(className, html) {
  let button = document.createElement('button');
  document.getElementById('date').append(button);
  button.classList.add(className);
  button.innerHTML = html;
  return button
};

function displayPlanets(arr) {
  document.getElementById('date').innerHTML = "";
  arr.forEach(el => {
    createDiv('planet').innerHTML = el.name;
  });
};

btnGetInfo.addEventListener('click', function () {
  getPeople()
});

btnGetPlanet.addEventListener('click', function () {
  getPlanets()
});
