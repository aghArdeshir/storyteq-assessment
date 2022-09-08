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

export function createAutocompleteStore<T = any>(
  items: T[],
  matcher: Matcher<T>
): UnwrapNestedRefs<Store<T>> {
  return reactive<Store<T>>({
    selectedItems: [],
    availableItemsToSelect: [],
    search(searchTerm: string) {
      if (searchTerm.length < MIN_CHARACTERS_LENGTH_TO_SEARCH) {
        this.availableItemsToSelect = [];
        return;
      }

      this.availableItemsToSelect = items.filter(matcher(searchTerm));
    },
    setSelectedItems(selectedBooks: T[]) {
      this.selectedItems = selectedBooks;
    },
    removeItem(removedBook: T) {
      this.selectedItems = this.selectedItems.filter(
        (book) => book !== removedBook
      );
    },
  });
}
