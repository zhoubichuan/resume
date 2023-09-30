import request from "@/request";
export function getFrontendNote(data: any): any {
  return request({
    url: "./mock/frontend.json",
    method: "get",
    params: data,
  });
}
export function getBackendNote(data: any): any {
  return request({
    url: "./mock/backend.json",
    method: "get",
    params: data,
  });
}
export function getOperationNote(data: any): any {
  return request({
    url: "./mock/operation.json",
    method: "get",
    params: data,
  });
}
export function getOtherNote(data: any): any {
  return request({
    url: "./mock/other.json",
    method: "get",
    params: data,
  });
}
export function getMap(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/${index}?current=1&pageSize=2000`,
    method: "get",
  });
  // return request({
  //   url: "mock/map" + index + ".json",
  //   method: "get",
  // });
}
