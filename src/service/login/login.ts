import { ILoginAccount, IDataType, ILoginResult } from './type'
import lyRequest from '../index'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

//用户登录请求
export function accountUserLoginRequest(account: ILoginAccount) {
  return lyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

//通过用户id获取用户的信息
export function requestUserInfoById(userId: number) {
  return lyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + userId,
    showLoading: false
  })
}

//通过用户id来获取用户的菜单信息
export function requestGetUserMenuByUserId(userId: number) {
  return lyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + userId + '/menu',
    showLoading: false
  })
}
