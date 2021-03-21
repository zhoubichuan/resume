import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Message from "@/components/message.vue";

describe("Link.vue", () => {
  it("信息组件", () => {
    const msg = "";
    const wrapper = shallowMount(Message, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
