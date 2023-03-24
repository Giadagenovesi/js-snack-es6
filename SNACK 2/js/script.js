// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        name: "Leoni",
        score: "0",
        fouls: "0",
    },
    {
        name: "Paperi",
        score: "0",
        fouls: "0",
    },
    {
        name: "Lupi",
        score: "0",
        fouls: "0",
    },
    {
        name: "Gattini",
        score: "0",
        fouls: "0",
    },
    {
        name: "Gazzelle",
        score: "0",
        fouls: "0",
    },
];

const teamsResult = [];
teams.forEach((curTeam) => {
    curTeam.score = Math.floor(Math.random() * 100);
    curTeam.fouls = Math.floor(Math.random() * 30);
});
console.log(teams);
