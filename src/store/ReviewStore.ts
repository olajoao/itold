import { defineStore } from "pinia";
import request from "../http";

export interface ReviewProps {
  id: number;
  movieId: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const ReviewStore = defineStore("useReviewStore", {
  state: () => {
    return {
      reviews: [] as ReviewProps[],
    };
  },
  actions: {
    async getAllByMovieId(movieId: string) {
      try {
        const {
          data: { reviews },
        } = await request.get(`http://localhost:4000/reviews/${movieId}`);

        this.reviews = reviews;
      } catch (error) {
        console.error("Error finding reviews: ", error);
      }
    },
  },
});
