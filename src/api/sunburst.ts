import request from "@/util/request";

export function getSunburst(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=sunburst${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/sunburst" + index + ".json",
  //   method: "get",
  // });
}
