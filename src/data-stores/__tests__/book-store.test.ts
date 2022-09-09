import { MIN_CHARACTERS_LENGTH_TO_SEARCH } from "@/constants/constants";
import { describe, test, expect } from "vitest";
import { createAutocompleteStore } from "../store-builder";

describe("Store Creator", () => {
  test("creates stores without any pain (smoke test)", () => {
    const testStore = createAutocompleteStore([], () => () => true);
    expect(testStore.selectedItems).toEqual([]);
  });

  test("searches correctly through data", () => {
    const mockData = ["ONE", "two", "three"];
    const testStore = createAutocompleteStore(
      mockData,
      (searchTerm) => (item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    expect(testStore.availableItemsToSelect).toEqual([]);

    testStore.search("one");
    expect(testStore.availableItemsToSelect).toEqual(["ONE"]);
  });

  test(`searches for nothing when there are less than ${MIN_CHARACTERS_LENGTH_TO_SEARCH} characters`, () => {
    const mockData = ["one", "two", "three"];
    const testStore = createAutocompleteStore(
      mockData,
      (searchTerm) => (item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    expect(testStore.availableItemsToSelect).toEqual([]);

    testStore.search("o");
    expect(testStore.availableItemsToSelect).toEqual([]);
  });

  test("sets selected items thoroughly without pain", () => {
    const testStore = createAutocompleteStore([] as Number[], () => () => true);
    testStore.setSelectedItems([1, 2, 3]);
    expect(testStore.selectedItems).toEqual([1, 2, 3]);
  });

  test("removes item without pain", () => {
    const mockData = ["one", "two", "three"];
    const testStore = createAutocompleteStore(mockData, () => () => true);

    testStore.setSelectedItems(["one"]);
    expect(testStore.selectedItems).toEqual(["one"]);

    testStore.removeItem("one");
    expect(testStore.selectedItems).toEqual([]);
  });
});
