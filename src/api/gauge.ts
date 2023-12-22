import request from "@/util/request";

export function getGauge(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=gauge${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/gauge" + index + ".json",
  //   method: "get",
  // });
}
