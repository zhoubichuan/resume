import Vue from "vue";
import Introduce from "@/components/Introduce";

describe("Introduce.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Introduce);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".bg-purple .center")[0].textContent).toEqual(
      "我叫周必川"
    );
    expect(vm.$el.querySelector(".bg-purple .center")[2].textContent).toEqual(
      "一名全栈工程师"
    );
    expect(vm.$el.querySelector(".bg-purple .center")[3].textContent).toEqual(
      "zhoubichuan@icloud.com"
    );
    expect(vm.$el.querySelector(".bg-purple .center")[4].textContent).toEqual(
      "深圳"
    );
  });
});
