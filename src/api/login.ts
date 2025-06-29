import request from "@/util/request";
export function getFrontendNote(data: Record<string, string>): Promise<Record<string, string>> {
  return request({
    url: "./mock/frontend.json",
    method: "get",
    params: data,
  });
}
export function getBackendNote(data: Record<string, string>): Promise<Record<string, string>> {
  return request({
    url: "./mock/backend.json",
    method: "get",
    params: data,
  });
}
export function getOperationNote(data: Record<string, string>): Promise<Record<string, string>> {
  return request({
    url: "./mock/operation.json",
    method: "get",
    params: data,
  });
}
export function getOtherNote(data: Record<string, string>): Promise<Record<string, string>> {
  return request({
    url: "./mock/other.json",
    method: "get",
    params: data,
  });
}
export function getGupiao(): Promise<Record<string, string>> {
  return request({
    url: "./mock/aaa.json",
    method: "get",
  });
}
