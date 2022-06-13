// 引入axios（axios进行了二次封装）
import request from '@/utils/request'

// 对外暴露登录接口函数
export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

// 对外暴露获取用户信息函数
export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

// 对外暴露退出登录函数
export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
