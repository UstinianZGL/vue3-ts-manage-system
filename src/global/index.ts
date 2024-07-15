import { App } from 'vue'
import registerElements from './register-element'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerElements)
  app.use(registerProperties)
}
