import { AvatarDropdown, Footer, MenuUser } from '@/components';
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
const homePath = '/';

export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
      history.push(homePath);
    }
    return undefined;
  };

  const { location } = history;
  if (location.pathname !== homePath) {
    //const currentUser = await fetchUserInfo();
    return {
      //fetchUserInfo,
      //currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    //fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    footerRender: () => <Footer />,
    childrenRender: (children) => {
      return (
        <>
          <div className="bg-white">
            {localStorage.getItem('userLoginId') && <MenuUser className="mt-3" />}
            {children}
          </div>
        </>
      );
    },
    ...initialState?.settings,
  };
};

export const request = {
  ...errorConfig,
};
