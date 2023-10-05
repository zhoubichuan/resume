import request from "@/util/request";

export function getSystemTag(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/7/?current=1&pageSize=2000&filterField=systemTag${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/systemTag" + index + ".json",
  //   method: "get",
  // });
}
