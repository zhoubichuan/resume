import request from "@/util/request";

export function getBar(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=bar${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/bar" + index + ".json",
  //   method: "get",
  // });
}
