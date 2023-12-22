import request from "@/util/request";

export function getBoxplot(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=boxplot${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/boxplot" + index + ".json",
  //   method: "get",
  // });
}
