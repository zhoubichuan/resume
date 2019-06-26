import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Link from "@/components/Link.vue";

describe("Link.vue", () => {
  it("链接组件", () => {
    const msg = "";
    const wrapper = shallowMount(Link, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
