import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import exportQuasarConfig from './exportQuasarConfig'

export default defineConfig({
  plugins: [HstVue()],
  vite: async () => await exportQuasarConfig()
})
