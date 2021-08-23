const inquirer = require("inquirer");
const axios = require("axios");

async function main() {
    // inquirer.prompt({
    //     type: "input",
    //     name: "movieName",
    //     message: "What movie would you like info about?"
    // }).then((response) => {
    //     console.log(response)
    // })

    const getMovie = await inquirer.prompt({
        type: "input",
        name: "movieName",
        message: "What movie would you like info about?"
    });

    //console.log(getMovie);

    const { movieName } = getMovie;

    const movieUrl = `https://www.omdbapi.com/?t=${movieName}&apikey=trilogy`;

    const movieApi = await axios.get(movieUrl);

    const { Title, Plot, Actors, Rated } = movieApi.data//RIGHT HERE;


    // const Title = movieApi.data["Title"];
    // const Plot = movieApi.data["Plot"];
    // const Actors = movieApi.data["Actors"];

    //const { Title, Plot, Actors, Rated } = movieApi.data//RIGHT HERE;

    console.log(Title, "\n*****\n", Plot, "\n******\n", Actors, "\n******\n", Rated);

}

main();