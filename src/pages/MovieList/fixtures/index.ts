export const firstMovieEntry = {
  data: {
    results: {
      popularity: 541.169,
      vote_count: 1569,
      video: false,
      poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      id: 419704,
      adult: false,
      backdrop_path: "/p3TCqUDoVsrIm8fHK9KOTfWnDjZ.jpg",
      original_language: "en",
      original_title: "Ad Astra",
      genre_ids: [12, 18, 9648, 878, 53],
      title: "Ad Astra",
      vote_average: 6,
      overview: `The near future, a time when both hope and hardships drive humanity to look to the stars and beyond.
       While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a
       mission across the immensity of space and its many perils to uncover the truth about a lost expedition that
       decades before boldly faced emptiness and silence in search of the unknown.`,
      release_date: "2019-09-17"
    }
  }
};

export const genre = {
  data: {
    genre: {
      id: "1",
      name: "Action"
    }
  }
};

export const genres = [
  {
    id: 1,
    name: "name",
    isChecked: true
  },
  {
    id: 2,
    name: "name",
    isChecked: false
  },
  {
    id: 3,
    name: "name",
    isChecked: false
  },
  {
    id: 4,
    name: "name",
    isChecked: true
  }
];

export const selectedGenres = [
  { id: 1, isChecked: true, name: "name" },
  { id: 4, isChecked: true, name: "name" }
];

export const movies = [
  {
    adult: false,
    backdrop_path: "string",
    genre_ids: [1, 2, 3],
    id: 1,
    original_language: "string",
    original_title: "string",
    overview: "string",
    popularity: 2,
    poster_path: "string",
    release_date: "string",
    title: "string",
    video: false,
    vote_average: 2,
    vote_count: 2
  },
  {
    adult: false,
    backdrop_path: "string",
    genre_ids: [45, 89],
    id: 2,
    original_language: "string",
    original_title: "string",
    overview: "string",
    popularity: 2,
    poster_path: "string",
    release_date: "string",
    title: "string",
    video: false,
    vote_average: 2,
    vote_count: 2
  },
  {
    adult: false,
    backdrop_path: "string",
    genre_ids: [2, 5],
    id: 3,
    original_language: "string",
    original_title: "string",
    overview: "string",
    popularity: 2,
    poster_path: "string",
    release_date: "string",
    title: "string",
    video: false,
    vote_average: 2,
    vote_count: 2
  }
];
