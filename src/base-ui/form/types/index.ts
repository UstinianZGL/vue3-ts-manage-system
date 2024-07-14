type IFormType = 'input' | 'password' | 'select' | 'datapicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  filed: string
  placeholder?: string
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  IFromItem: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemStyle: any
}
