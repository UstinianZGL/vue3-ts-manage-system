import { IForm, IFormItem } from '@/base-ui/form/types/index'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  colLayout: () => ({
    span: 8
  }),
  itemStyle: () => ({
    padding: '10px 20px'
  }),
  IFromItem: [
    {
      filed: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入用户id'
    },
    {
      filed: 'userName',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      filed: 'userPassword',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      filed: 'selectType',
      type: 'select',
      label: '查询类型',
      placeholder: '请输入对应的查询类型',
      options: [
        {
          key: '管理员',
          value: 'admin',
          title: '管理员'
        },
        {
          key: '超级管理员',
          value: 'superadmin',
          title: '超级管理员'
        }
      ]
    },
    {
      filed: 'createTime',
      type: 'datapicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
