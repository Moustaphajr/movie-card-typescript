import { Movie } from "../service";

export const data: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    year: "1994",
    img: "https://images.flickdirect.com/movies/shawshank-redemption/shawshank-redemption-box-art.jpg",
    trailer: `
    <iframe width="702" height="395" src="https://www.youtube.com/embed/NmzuHjWmXOc" title="The Shawshank Redemption (1994) Official Trailer #1 - Morgan Freeman Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },

  {
    id: 2,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    year: "1972",
    img: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
    trailer: `
    <iframe width="702" height="395" src="https://www.youtube.com/embed/UaVTIH8mujA" title="THE GODFATHER | 50th Anniversary Trailer | Paramount Pictures" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    `,
  },
];
