import readlineSync from "readline-sync";

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

const running = true;

while (running) {
  const choise = readlineSync.keyInSelect(options, "your choise? ");
  if (choise === 1) {
  }
}
