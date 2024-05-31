// За допомогою StarWars Api https://swapi.dev/ та fetch API зробити наступне:
// 3. Зібрати в масив назви всіх резидентів "residents", з усіх планет що були у фільмі "Return of the Jedi" (id = 3). Використовуйте async/await
//  Масив має мати наступний вигляд:
// [
// {planetName: 'SomePlanet1', residents: ['Han Solo', 'r2d2']},
// {planetName: 'SomePlanet2', residents: ['Luke Skywalker', 'C3PO']}
// ]

const response = await fetch(`https://swapi.dev/api/films/3/`);
const responseBody = await response.json();
const planetsName = responseBody.planets;
const planesList = await Promise.all(planetsName);

const resultArray = [];
for (const planetsUrl of planesList) {
    const objectPlanetsResidents = {
        planetName: '',
        residents: []
    };
    const response = await fetch(planetsUrl);
    const planetsData = await response.json();
    objectPlanetsResidents.planetName = planetsData.name;
    for (const peopleLink of planetsData.residents) {
        const response = await fetch(peopleLink);
        const responseBody = await response.json();
        objectPlanetsResidents.residents.push(responseBody.name)
    }
    resultArray.push(objectPlanetsResidents)
};
const result = await Promise.all(resultArray);
console.log(result) 
