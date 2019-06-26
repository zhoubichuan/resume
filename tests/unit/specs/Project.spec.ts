import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Project from "@/components/Project.vue";

describe("Project.vue", () => {
  it("项目组件", () => {
    const msg = "";
    const wrapper = shallowMount(Project, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
