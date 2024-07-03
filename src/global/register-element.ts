import { App } from 'vue'
import 'element-plus/dist/index.css'

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
  ElIcon
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
  ElIcon
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
