import request from "@/util/request";

export function getCustom(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=custom${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/custom" + index + ".json",
  //   method: "get",
  // });
}
