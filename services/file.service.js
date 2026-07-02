import fs from "fs";

// const pathFile = "utils/movie.json";

export function readFromFile(callback) {
  fs.readFile("utils/movie.json", callback);
}
