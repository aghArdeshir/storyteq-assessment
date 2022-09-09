import { MIN_CHARACTERS_LENGTH_TO_SEARCH } from "@/constants/constants";
import { reactive, type UnwrapNestedRefs } from "vue";

type Store<T> = {
  selectedItems: T[];
  availableItemsToSelect: T[];
  search: (searchTerm: string) => void;
  setSelectedItems: (selectedItems: T[]) => void;
  removeItem: (removedItem: T) => void;
};

type Matcher<T> = (searchTerm: string) => (item: T) => boolean;

export function createAutocompleteStore<T>(
  items: T[],
  matcher: Matcher<T>
): UnwrapNestedRefs<Store<T>> {
  const state = reactive<Store<T>>({
    selectedItems: [],
    availableItemsToSelect: [],

    search(searchTerm: string) {
      if (searchTerm.length < MIN_CHARACTERS_LENGTH_TO_SEARCH) {
        state.availableItemsToSelect = [];
        return;
      }

      state.availableItemsToSelect = items.filter(
        matcher(searchTerm)
      ) as typeof state.availableItemsToSelect;
    },

    setSelectedItems(selectedBooks: T[]) {
      state.selectedItems = selectedBooks as typeof state.selectedItems;
    },

    removeItem(removedBook: T) {
      state.selectedItems = state.selectedItems.filter(
        (book) => book !== removedBook
      );
    },
  });

  return state;
}
