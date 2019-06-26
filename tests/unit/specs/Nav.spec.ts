import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

describe("Nav.vue", () => {
  it("导航组件", () => {
    const msg = "Resume个人简历关于我前端技能作品展示我的经历留言板联系我";
    const wrapper = shallowMount(Nav, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
