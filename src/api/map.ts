import request from "@/util/request";
export function getMap(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/${index}?current=1&pageSize=2000`,
    method: "get",
  });
  // return request({
  //   url: "mock/map" + index + ".json",
  //   method: "get",
  // });
}
