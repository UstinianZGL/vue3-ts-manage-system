import { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'

export interface IRootState {
  name: string
  age: number
}

export interface ILoginModule {
  login: ILoginState
}

export interface ISystemModule {
  system: ISystemState
}

export type IStoreType = IRootState & ILoginModule & ISystemModule
