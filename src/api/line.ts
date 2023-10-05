import request from "@/util/request";

export function getLine(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/7/?current=1&pageSize=2000&filterField=line${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/line" + index + ".json",
  //   method: "get",
  // });
}
