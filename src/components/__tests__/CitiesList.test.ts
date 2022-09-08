import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CitiesListVue from "../CitiesList.vue";
import { MIN_CHARACTERS_LENGTH_TO_SEARCH } from "@/constants/constants";
import { cityStore } from "@/data-stores/city-store";

describe("Cities List", () => {
  it("renders properly", () => {
    const wrapper = mount(CitiesListVue);
    expect(wrapper.text()).toContain(
      `Write at least ${MIN_CHARACTERS_LENGTH_TO_SEARCH} characters to start`
    );
  });

  it("Removing a chip removes it from store", () => {
    cityStore.setSelectedItems(["one"]);
    const wrapper = mount(CitiesListVue);
    const deleteButton = wrapper.get("button");
    expect(deleteButton.text()).toEqual("X");
    deleteButton.trigger("click");
    expect(cityStore.selectedItems).toEqual([]);
  });
});
