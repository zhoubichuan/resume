import request from "@/util/request";

export function getRadar(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=radar${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/radar" + index + ".json",
  //   method: "get",
  // });
}
