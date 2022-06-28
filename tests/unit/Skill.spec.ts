import { shallowMount } from "@vue/test-utils";
import Skill from "@/components/Skill.vue";

describe("Skill.vue", () => {
  it("技能组件", () => {
    const msg = "";
    const wrapper = shallowMount(Skill, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
