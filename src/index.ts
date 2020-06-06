import { IPluginContext } from '@tarojs/service'

export default (ctx: IPluginContext) => {
  ctx.modifyWebpackChain(({ chain }) => {
    chain.module.rule('sass').use('0').loader('sass-loader').options({
      // @ts-ignore
      implementation: require('sass'),
    });
  })
}
