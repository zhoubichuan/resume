import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Introduce from "@/components/aboutMe.vue";

describe("Introduce.vue", () => {
  it("关于我组件", () => {
    const msg = "";
    const wrapper = shallowMount(Introduce, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
