import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Index from "@/components/Index.vue";

describe("index.vue", () => {
  it("首页组件", () => {
    const msg = "";
    const wrapper = shallowMount(Index, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
