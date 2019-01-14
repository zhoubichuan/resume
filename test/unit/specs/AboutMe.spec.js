import Vue from "vue";
import Introduce from "@/components/Introduce";

describe("Introduce.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(Introduce);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".bg-purple p.center")[0].textContent).toEqual(
      "三年互联网经验,两年半全职前端开发经验"
    );
    expect(vm.$el.querySelector(".bg-purple p.center")[2].textContent).toEqual(
      "熟悉MV*开发,深谙自动化,模块化开发之道"
    );
    expect(vm.$el.querySelector(".bg-purple p.center")[3].textContent).toEqual(
      "高效的自学能力,具备独立分析解决问题能力"
    );
    expect(vm.$el.querySelector(".bg-purple p.center")[4].textContent).toEqual(
      "强烈的自我驱动力,代码强迫症患者"
    );
  });
});
