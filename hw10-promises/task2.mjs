// За допомогою StarWars Api https://swapi.dev/ та fetch API зробити наступне:
// 2. Вивеcти в консоль назви всіх "starships", котрими володів Han Solo (id = 14):
//     2.1 Використовуючи методи классу Promise
//     2.2 Використовуючи async/await


// 2.1 Використовуючи методи классу Promise
fetch('https://swapi.dev/api/people/14/')
    .then(res => res.json())
    .then(json => {
        const starships = json.starships;
        let starshipsName = [];

        starships.forEach(starshipUrl => {
            starshipsName.push(fetch(starshipUrl)
                .then(res => res.json())
                .then(resBody => resBody.name))
        });
        return Promise.all(starshipsName);
    })
    .then(starshipsName => {
        starshipsName.forEach(name => console.log(name));
    })


// 2.2 Використовуючи async/await
const HanSolo = await fetch(`https://swapi.dev/api/people/14/`);
const res = await HanSolo.json();
const shipsInf = res.starships;

const HanSoloShipsNames = [];
for (let i = 0; i < shipsInf.length; i++) {
    const response = await fetch(`${shipsInf[i]}`)
    const responseBody = await response.json()
    HanSoloShipsNames.push(responseBody.name)
};

const result = await Promise.all(HanSoloShipsNames);
console.log(result)
