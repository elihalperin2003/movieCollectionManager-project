import fs from "fs";

// const pathFile = "utils/movie.json";

export function readFromFile(callback) {
  fs.readFile("utils/movie.json", callback);
}
export function writeToFile(data, callback) {
  fs.writeFile("utils/movie.json", data, callback);
}
