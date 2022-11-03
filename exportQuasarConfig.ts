import extensionRunner from '@quasar/app-vite/lib/app-extension/extensions-runner'
import getQuasarCtx from '@quasar/app-vite/lib/helpers/get-quasar-ctx'
import QuasarConfFile from '@quasar/app-vite/lib/quasar-config-file'
import generateConfig from '@quasar/app-vite/lib/modes/spa/spa-config'

export default async function exportQuasarConfig (): Promise<any> {
  const ctx = getQuasarCtx({
    mode: 'spa',
    target: void 0,
    debug: false,
    dev: true,
    prod: false
  })

  // register app extensions
  await extensionRunner.registerExtensions(ctx)

  const quasarConfFile = new QuasarConfFile({ ctx })

  const quasarConf = await quasarConfFile.read()
  if (quasarConf.error !== void 0) {
    console.log(quasarConf.error)
  }

  return {
    ...(await generateConfig.vite(quasarConf)),
    devServer: {
      port: 3007
    }
  }
}
