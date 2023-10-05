import request from "@/util/request";
export * from "./login";
export * from "./project";
export * from "./map";
export * from "./custom";
export * from "./effectScatter";
export * from "./gauge";
export * from "./heatmap";
export * from "./parallel";
export * from "./pictorialBar";
export * from "./radar";
export * from "./themeRiver";
export * from "./treemap";
export * from "./bar";
export * from "./polar";
export * from "./sunburst";
export * from "./graph";
export * from "./pie";
export * from "./candlestick";
export * from "./tree";
export * from "./scatter";
export * from "./line";
export * from "./systemTag";
export * from "./boxplot";
function ip(params: any) {
  return request({
    url: "https://zhoubichuan.com/antdpro-express/api/rule7",
    method: "post",
    params,
  });
}
export const loadApi = () => {
  // 使用API获取IP地址
  // window.fetch("https://api.ipify.org?format=json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // 使用IP地址获取地理位置
  //     window.fetch(`https://ipapi.co/${data.ip}/json`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         ip(data);
  //       })
  //       .catch((error) => console.log(error));
  //   })
  //   .catch((error) => console.log(error, "-----------------------"));
};
