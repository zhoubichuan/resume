import { shallowMount } from "@vue/test-utils";
import Experience from "@/components/Experience.vue";

describe("Experience.vue", () => {
  it("经验组件", () => {
    const msg = "123";
    const wrapper = shallowMount(Experience, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
