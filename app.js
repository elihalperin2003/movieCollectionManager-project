import readlineSync from "readline-sync";

import { readFromFile } from "./services/file.service.js";
import { getAllNames, gatById } from "./services/movie.service.js";

const options = [
  "Show all movies",
  "Show by id",
  "Create new movie",
  "Delete movie",
  "Update rate",
  "Search by name",
  "Sort by genre",
  "Show statistics",
  "Exit",
];

const option1 = (err, data) => {
  if (err) {
    return console.error(err);
  }
  const result = JSON.parse(data);
  console.log(`names: ${getAllNames(result).join(", ")}`);
};

const option2 = (err, data) => {
  if (err) {
    return console.error(err);
  }
  const result = JSON.parse(data);
  const id = readlineSync.questionInt("id for serach? ");

  console.log(`${id}: ${JSON.stringify(gatById(result, id))}`);
};

function main() {
  let running = true;
  while (running) {
    const choise = readlineSync.keyInSelect(options, "your choise? ") + 1;
    // if (choise === 1) {
    //   readFromFile(option1);
    //   running = false;
    // } else
    if (choise === 2) {
      readFromFile(option2);
      running = false;
    }
  }
}
main();
