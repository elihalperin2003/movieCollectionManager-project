export const getAllNames = (data) => {
  const names = [];
  for (const movie of data) {
    names.push(movie.title);
  }
  return names;
};

export const gatById = (data, id) => {
  return data.find((movie) => (movie.id = id));
};
