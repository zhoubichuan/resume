import request from "@/util/request";
export function getScatter(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=scatter${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/scatter" + index + ".json",
  //   method: "get",
  // });
}
