import { cities, type City } from "@/constants/cities-db";
import { createAutocompleteStore } from "./store-builder";

export const cityStore = createAutocompleteStore<City>(
  cities,
  (searchTerm) => (city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
);
