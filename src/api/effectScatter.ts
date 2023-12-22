import request from "@/util/request";

export function getEffectScatter(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=effectScatter${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/effectScatter" + index + ".json",
  //   method: "get",
  // });
}
