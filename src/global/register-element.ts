import { App } from 'vue'
import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/base.css'

import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElFooter,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSelect,
  ElDatePicker
} from 'element-plus'

const components = [
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElFooter,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSelect,
  ElDatePicker
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
