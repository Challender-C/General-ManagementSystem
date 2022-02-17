import myRequest from '../index'

import type { IAccount, ILoginResult, IDateType } from './type'
enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

//登录获取id和token
export function accountLoginRequest(account: IAccount) {
  return myRequest.post<IDateType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

//获取用户信息
export function requestUserInfoById(id: number) {
  return myRequest.get<IDateType>({
    url: LoginApi.LoginUserInfo + id
  })
}

//获取用户的侧边栏菜单名
export function requestUserMenusById(id: number) {
  return myRequest.get<IDateType>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
