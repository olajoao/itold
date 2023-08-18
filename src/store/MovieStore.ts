import { defineStore } from "pinia";
import request from "../http";
export interface MovieProps {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export const MovieStore = defineStore("useMovieStore", {
  state: () => ({
    popularMovies: [] as MovieProps[],
    movie: {} as MovieProps,
  }),

  actions: {
    async getPopularMovies() {
      try {
        const { data: popularMovies } = await request.get(
          "/movie/popular?language=en-US&page=1"
        );

        this.popularMovies = popularMovies.results;
      } catch (error) {
        console.error("Error finding popular movies: ", error);
      }
    },

    async getMovie(movieId: string) {
      try {
        const { data: movie } = await request.get(`/movie/${movieId}`);
        this.movie = movie;
        return true;
      } catch (error) {
        console.error("No movie found", error);
        return false;
      }
    },
  },
});
