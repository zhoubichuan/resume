import request from "@/util/request";

export function getHeatmap(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=heatmap${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/heatmap" + index + ".json",
  //   method: "get",
  // });
}
