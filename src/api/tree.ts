import request from "@/util/request";
export function getTree(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=tree${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/tree" + index + ".json",
  //   method: "get",
  // });
}
