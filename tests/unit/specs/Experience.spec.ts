import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Experience from "@/components/Experience.vue";

describe("Experience.vue", () => {
  it("经验组件", () => {
    const msg = "";
    const wrapper = shallowMount(Experience, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
