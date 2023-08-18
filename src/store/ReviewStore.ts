import { defineStore } from "pinia";
import request from "../http";

export interface ReviewProps {
  id?: number;
  movieId?: number;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export const ReviewStore = defineStore("useReviewStore", {
  state: () => ({
    reviews: [] as ReviewProps[],
  }),
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

    async createReview(review: ReviewProps) {
      try {
        await request.post("http://localhost:4000/reviews", review);
      } catch (error) {
        console.error("Error creating review: ", error);
      }
    },
  },
});
