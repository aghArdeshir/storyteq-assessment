import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AutoCompleteVue from "../AutoComplete.vue";

describe("AutoComplete", () => {
  it("renders properly (smoke test)", () => {
    mount(AutoCompleteVue, {
      props: {
        availableOptions: [],
        selectedOptions: [],
        minLength: 1,
        placeholder: "",
      },
    });
  });

  it("calls correct callback on input text change", () => {
    const wrapper = mount(AutoCompleteVue, {
      props: {
        availableOptions: [],
        selectedOptions: [],
        minLength: 1,
        placeholder: "",
      },
    });

    wrapper.find("input").setValue("asdf");
    expect(wrapper.emitted()).toHaveProperty("onTextChange");
  });

  it("selecting an option calls onChange", () => {
    const wrapper = mount(AutoCompleteVue, {
      props: {
        availableOptions: ["one"],
        selectedOptions: [],
        minLength: 1,
        placeholder: "",
      },
    });

    wrapper.find("input[type=checkbox]").setValue(true);
    expect(wrapper.emitted()).toHaveProperty("onChange");
  });
});
