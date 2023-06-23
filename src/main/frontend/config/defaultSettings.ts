import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#168C5F',
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '',
  pwa: true,
  logo: '/img/negativo.png',
  iconfontUrl: '',
  token: {},
};

export default Settings;
