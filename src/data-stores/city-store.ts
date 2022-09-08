import { cities, type City } from "@/constants/db";
import { createAutocompleteStore } from "./store-builder";

export const cityStore = createAutocompleteStore<City>(
  cities,
  (searchTerm) => (item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
);
