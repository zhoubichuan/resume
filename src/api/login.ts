import request from "@/util/request";
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
