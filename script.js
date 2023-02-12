const inputEl = document.getElementById("inputName");
const inputNumEl=document.getElementById("inputNum");
const searchButtonName = document.getElementById("searchBtnName");
const searchButtonNum=document.getElementById("searchBtnNum");
const randomHeroButton = document.getElementById("randomHeroBtn");
const heroImageDiv = document.getElementById("heroImg");

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️",
  power: "✊",
  combat: "⚔️",
};

const token = "146319081607576";
const url = "https://superheroapi.com/api/146319081607576";



searchButtonNum.addEventListener("click", searchSuperHeroNum);

function searchSuperHeroNum(){
 const num=inputNumEl.value;
 console.log(num);
 fetch(`https://superheroapi.com/api.php/146319081607576/${num}`)
   .then((response) => response.json())
   .then((data) => {
     const superhero = data;
     const name = `<h2>${superhero.name}</h2>`;
     const img = `<img src="${superhero.image.url}" height=200 width=200/>`;
     const stats = Object.keys(superhero.powerstats)
       .map((stat) => {
         return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}:${
           superhero.powerstats[stat]
         }</p>`;
       })
       .join(""); 
     console.log(superhero);
     heroImageDiv.innerHTML = `${name} ${img}${stats}`;
   });
}


searchButtonName.addEventListener('click',searchSuperHeroNam)

function searchSuperHeroNam(){
const name=inputEl.value;
console.log(name);
fetch(`https://superheroapi.com/api.php/146319081607576/search/${name}`)
  .then((response) => response.json())
  .then((data) => {    
    const superhero = data.results[0];
    const name = `<h2>${superhero.name}</h2>`;
    const img = `<img src="${superhero.image.url}" height=200 width=200/>`;
    const stats = Object.keys(superhero.powerstats)
      .map((stat) => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}:${
          superhero.powerstats[stat]
        }</p>`;
      })
      .join("");;
    console.log(superhero);
    heroImageDiv.innerHTML = `${name} ${img}${stats}`;
  })
 }

randomHeroButton.addEventListener('click',randomHero)
function randomHero(){
 const randomNum=Math.floor(Math.random()*732); 
  fetch(`https://superheroapi.com/api.php/146319081607576/${randomNum}`)
    .then((response) => response.json())
    .then((data) => {
      const superhero = data;
      const name = `<h2>${superhero.name}</h2>`;
      const img = `<img src="${superhero.image.url}" height=200 width=200/>`
      const stats = Object.keys(superhero.powerstats)
        .map((stat) => { return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}:${
          superhero.powerstats[stat]
        }</p>`
        })
        .join("");
        console.log(Object.keys(superhero.powerstats));
      heroImageDiv.innerHTML = `${name} ${img}${stats}`;
    });
 }




