import { shallowMount } from "@vue/test-utils";
import Note from "@/components/Note.vue";

describe("Note.vue", () => {
  it("导航组件", () => {
    const msg = "Resume个人简历关于我前端技能作品展示我的经历留言板联系我";
    const wrapper = shallowMount(Note, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
