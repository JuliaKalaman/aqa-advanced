// За допомогою StarWars Api https://swapi.dev/ та fetch API зробити наступне:
//  1. Використовуючи методи классу Promise отримати масив назв планет перших 10 id

async function fetchPlanetsName() {
    const planets = [];
    for (let i = 1; i < 11; i++) {
        planets.push(
            fetch(`https://swapi.dev/api/planets/${i}`)
                .then(res => res.json())
                .then(resBody => resBody.name)
        )
    }
    const result = await Promise.all(planets)
    console.log(result)
}
fetchPlanetsName();