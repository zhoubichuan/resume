import request from '@/util/request'

export function getPie(index = 1) {
  return request({
    url: `https://zhoubichuan.com/antdpro-express/api/list/data/1/?current=1&typeName=pie${index}`,
    method: "get",
  });
  // return request({
  //   url: "mock/pie" + index + ".json",
  //   method: "get",
  // });
}