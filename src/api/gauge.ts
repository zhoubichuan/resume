import request from "@/util/request";

export function getGauge(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/7/?current=1&pageSize=2000&filterField=gauge${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/gauge" + index + ".json",
  //   method: "get",
  // });
}
