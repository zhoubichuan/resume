import request from '@/util/request'

export function getPie(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/7/?current=1&pageSize=2000&filterField=pie${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/pie" + index + ".json",
  //   method: "get",
  // });
}