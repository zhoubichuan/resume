import request from "@/util/request";

export function getPictorialBar(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=pictorialBar${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/pictorialBar" + index + ".json",
  //   method: "get",
  // });
}
