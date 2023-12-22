import request from "@/util/request";

export function getThemeRiver(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=themeRiver${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/themeRiver" + index + ".json",
  //   method: "get",
  // });
}
