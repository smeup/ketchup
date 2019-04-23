import { shallowMount } from "@vue/test-utils";
import SmeupLabel from "@/components/SmeupLabel.vue";

describe("SmeupLabel", () => {
  it("renders content", () => {
    const content = "error";
    const wrapper = shallowMount(SmeupLabel, {
      propsData: {
        align: "right",
        color: "red",
        content: content
      }
    });
    expect(wrapper.text()).toMatch(content);
  });
});
