import { shallowMount } from "@vue/test-utils";
import AboutMe from "@/components/AboutMe.vue";

describe("AboutMe.vue", () => {
  it("首页组件", () => {
    const msg = "";
    const wrapper = shallowMount(AboutMe, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
