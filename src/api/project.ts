import request from '@/util/request'
// 获取开源项目
export function getProject(data: Record<string, string>): Promise<Record<string, string>> {
  return request({
    url: './mock/project.json',
    method: 'get',
    params: data
  })
}

