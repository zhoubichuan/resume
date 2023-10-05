import request from "@/util/request";

export function getSunburst(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/7/?current=1&pageSize=2000&filterField=sunburst${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/sunburst" + index + ".json",
  //   method: "get",
  // });
}
