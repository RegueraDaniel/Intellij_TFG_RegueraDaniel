import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import routes from './routes';

export default defineConfig({
  hash: true,
  routes,
  theme: {
    'root-entry-name': 'variable',
  },
  ignoreMomentLocale: true,
  fastRefresh: true,
  model: {},
  initialState: {},
  title: 'Econofy',
  layout: {
    locale: true,
    ...defaultSettings,
  },
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
  },
  antd: {},
  request: {},
  access: {},
  headScripts: [{ src: '/scripts/loading.js', async: true }],
  //================ pro  =================
  presets: ['umi-presets-pro'],
  mfsu: {
    strategy: 'normal',
  },
  requestRecord: {},
});
