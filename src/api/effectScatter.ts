import request from "@/util/request";

export function getEffectScatter(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/7/?current=1&pageSize=2000&filterField=effectScatter${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/effectScatter" + index + ".json",
  //   method: "get",
  // });
}
