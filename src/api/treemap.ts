import request from "@/util/request";

export function getTreemap(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=treemap${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/treemap" + index + ".json",
  //   method: "get",
  // });
}
