import request from '@/request'
// 获取开源项目
export function getProject (data:object):object {
  return request({
    url: 'src/assets/mockData/project.json',
    method: 'get',
    params: data
  })
}
// 获取数据实体详情
export function getDataEntityDetail (data:object):object  {
  return request({
    url: '/resume/getDataEntityDetail',
    method: 'post',
    data
  })
}
// 创建数据实体
export function createDataEntity (data:object):object  {
  return request({
    url: '/resume/createDataEntity',
    method: 'post',
    data
  })
}
// 更新数据实体
export function updateDataEntity (data:object):object  {
  return request({
    url: '/resume/updateDataEntity',
    method: 'put',
    data
  })
}
// 删除数据实体
export function deleteDataEntity (data:object):object  {
  return request({
    url: '/resume/deleteDataEntity',
    method: 'delete',
    data
  })
}
// 数据实体基本属性列表查询
export function getDataEntityBaseAttrList (data:object):object  {
  return request({
    url: '/resume/getDataEntityBaseAttrList',
    method: 'get',
    params: data
  })
}

// 数据实体基本属性详情查询
export function getDataEntityBaseAttrDetail (data:object):object  {
  return request({
    url: '/resume/getDataEntityBaseAttrDetail',
    method: 'get',
    params: data
  })
}

// 数据实体基本属性创建
export function createDataEntityBaseAttr (data:object):object  {
  return request({
    url: '/resume/createDataEntityBaseAttr',
    method: 'post',
    data
  })
}
// 数据实体基本属性更新
export function updateDataEntityBaseAttr (data:object):object  {
  return request({
    url: '/resume/updateDataEntityBaseAttr',
    method: 'put',
    data
  })
}

// 数据实体基本属性删除
export function updateDataEntityBaseAttrDelete (data:object):object  {
  return request({
    url: '/resume/updateDataEntityBaseAttrDelete',
    method: 'delete',
    data
  })
}
// 数据实体扩展属性列表查询
export function getDataEntityExtendAttrList (data:object):object  {
  return request({
    url: '/resume/getDataEntityExtendAttrList',
    method: 'get',
    params: data
  })
}

// 数据实体扩展属性详情查询
export function getDataEntityExtendAttrDetail (data:object):object  {
  return request({
    url: '/resume/getDataEntityExtendAttrDetail',
    method: 'get',
    params: data
  })
}

// 数据实体扩展属性创建
export function createDataEntityExtendAttr (data:object):object  {
  return request({
    url: '/resume/createDataEntityExtendAttr',
    method: 'post',
    data
  })
}
// 数据实体扩展属性更新
export function updateDataEntityExtendAttr (data:object):object  {
  return request({
    url: '/resume/updateDataEntityExtendAttr',
    method: 'delete',
    params:data
  })
}

// 数据实体基本属性删除
export function updateDataEntityExtendAttrDelete (data:object):object  {
  return request({
    url: '/resume/updateDataEntityExtendAttrDelete',
    method: 'delete',
    data
  })
}

// 数据实体父模型属性列表查询
export function getDataEntityParentAttrList (data:object):object  {
  return request({
    url: '/resume/getDataEntityParentAttrList',
    method: 'get',
    params: data
  })
}

// 数据实体父模型属性列表查询
export function getDataEntityParentAttrDetail (data:object):object  {
  return request({
    url: '/resume/getDataEntityParentAttrDetail',
    method: 'get',
    params: data
  })
}
