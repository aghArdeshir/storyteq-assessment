import { MIN_CHARACTERS_LENGTH_TO_SEARCH } from "@/constants/constants";
import { cities, type City } from "@/constants/db";
import { reactive } from "vue";

export const cityStore = reactive<{
  selectedCities: City[];
  availableOptions: City[];
  onTextChange: (inputText: string) => void;
  onSelectedCitiesChange: (newSelectedCities: City[]) => void;
  onRemoveCity: (removedCity: City) => void;
}>({
  selectedCities: [],
  availableOptions: [],
  onTextChange(inputText: string) {
    if (inputText.length < MIN_CHARACTERS_LENGTH_TO_SEARCH) {
      cityStore.availableOptions = [];
      return;
    }

    cityStore.availableOptions = cities.filter((city) =>
      city.toLowerCase().includes(inputText.toLowerCase())
    );
  },
  onSelectedCitiesChange(newSelectedCities: City[]) {
    cityStore.selectedCities = newSelectedCities;
  },
  onRemoveCity(removedBook: City) {
    cityStore.selectedCities = cityStore.selectedCities.filter(
      (city) => city !== removedBook
    );
  },
});
