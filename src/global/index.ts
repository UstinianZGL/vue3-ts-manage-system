import { App } from 'vue'
import registerElements from './register-element'

export function globalRegister(app: App): void {
  app.use(registerElements)
}
