import request from '@/request'
// 获取开源项目
export function getProject(data: any): any {
  return request({
    url: 'src/assets/mockData/project.json',
    method: 'get',
    params: data
  })
}
// 获取数据实体详情
export function getDataEntityDetail(data: any): any {
  return request({
    url: '/resume/getDataEntityDetail',
    method: 'post',
    data
  })
}
// 创建数据实体
export function createDataEntity(data: any): any {
  return request({
    url: '/resume/createDataEntity',
    method: 'post',
    data
  })
}
// 更新数据实体
export function updateDataEntity(data: any): any {
  return request({
    url: '/resume/updateDataEntity',
    method: 'put',
    data
  })
}
// 删除数据实体
export function deleteDataEntity(data: any): any {
  return request({
    url: '/resume/deleteDataEntity',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getDataEntityBaseAttrList(data: any): any {
  return request({
    url: '/resume/getDataEntityBaseAttrList',
    method: 'get',
    params: data
  })
}

// 数据实体基本属性详情查询
export function getDataEntityBaseAttrDetail(data: any): any {
  return request({
    url: '/resume/getDataEntityBaseAttrDetail',
    method: 'get',
    params: data
  })
}

// 数据实体基本属性创建
export function createDataEntityBaseAttr(data: any): any {
  return request({
    url: '/resume/createDataEntityBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateDataEntityBaseAttr(data: any): any {
  return request({
    url: '/resume/updateDataEntityBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateDataEntityBaseAttrDelete(data: any): any {
  return request({
    url: '/resume/updateDataEntityBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getDataEntityExtendAttrList(data: any): any {
  return request({
    url: '/resume/getDataEntityExtendAttrList',
    method: 'get',
    params: data
  })
}

// 数据实体扩展属性详情查询
export function getDataEntityExtendAttrDetail(data: any): any {
  return request({
    url: '/resume/getDataEntityExtendAttrDetail',
    method: 'get',
    params: data
  })
}

// 数据实体扩展属性创建
export function createDataEntityExtendAttr(data: any): any {
  return request({
    url: '/resume/createDataEntityExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateDataEntityExtendAttr(data: any): any {
  return request({
    url: '/resume/updateDataEntityExtendAttr',
    method: 'delete',
    params: data
  })
}

// 数据实体基本属性删除
export function updateDataEntityExtendAttrDelete(data: any): any {
  return request({
    url: '/resume/updateDataEntityExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getDataEntityParentAttrList(data: any): any {
  return request({
    url: '/resume/getDataEntityParentAttrList',
    method: 'get',
    params: data
  })
}

// 数据实体父模型属性列表查询
export function getDataEntityParentAttrDetail(data: any): any {
  return request({
    url: '/resume/getDataEntityParentAttrDetail',
    method: 'get',
    params: data
  })
}
