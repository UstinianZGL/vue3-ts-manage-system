import { ILoginState } from './login/type'

export interface IRootState {
  name: string
  age: number
}

export interface ILoginModule {
  login: ILoginState
}

export type IStoreType = IRootState & ILoginModule
