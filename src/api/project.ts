import request from '@/request'
// 获取开源项目
export function getProject(data: any): any {
  return request({
    url: 'src/assets/mockData/project.json',
    method: 'get',
    params: data
  })
}
