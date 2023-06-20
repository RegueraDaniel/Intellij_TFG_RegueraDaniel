import { Footer } from '@/components';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import React from 'react';
import { AvatarDropdown, AvatarName } from '@/components';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
const homePath = '/';
import { MenuUser } from '@/components';

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
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => '',
    disableContentMargin: false,
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        let algo = {}
        if (initialState) {
          algo = <AvatarDropdown>{avatarChildren}1</AvatarDropdown>;
        } else {
          algo = <AvatarDropdown>{avatarChildren}2</AvatarDropdown>;
        }
        return algo
      },
    },


    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      console.log(location.pathname)
      console.log(!initialState?.currentUser)

      if (!initialState?.currentUser && location.pathname == homePath) {
        console.log('Entra')
        history.push(homePath);
      }

      /*if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }*/

    },
    menuHeaderRender: undefined,
    childrenRender: (children) => {
      return (
        <>
          <div className='bg-white'>
            {!initialState?.currentUser && <MenuUser className='mt-3'/>}
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
