import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import introduce from "@/components/Introduce.vue";

describe("Introduce.vue", () => {
  it("首页组件", () => {
    const msg = "";
    const wrapper = shallowMount(introduce, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
