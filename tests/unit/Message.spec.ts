import { shallowMount } from "@vue/test-utils";
import Message from "@/components/Message.vue";

describe("Message.vue", () => {
  it("信息组件", () => {
    const msg = "";
    const wrapper = shallowMount(Message, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
