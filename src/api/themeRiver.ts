import request from "@/util/request";

export function getThemeRiver(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/7/?current=1&pageSize=2000&filterField=themeRiver${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/themeRiver" + index + ".json",
  //   method: "get",
  // });
}
