import { shallowMount } from "@vue/test-utils";
import Link from "@/components/Link.vue";

describe("Link.vue", () => {
  it("链接组件", () => {
    const msg = "1212";
    const wrapper = shallowMount(Link, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
