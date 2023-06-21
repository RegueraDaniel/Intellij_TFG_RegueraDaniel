import { Button, Space, Dropdown } from 'antd';
import React from 'react';
import { history } from '@umijs/max';
import { UserOutlined } from '@ant-design/icons';

export type GlobalHeaderRightProps = {
  menu?: boolean;
  children?: React.ReactNode;
};

export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu, children }) => {

  const loginOut = () => {
    localStorage.removeItem("userLoginId");
    localStorage.removeItem("userLoginUsername");
    localStorage.removeItem("userLoginurlImg");

    if (window.location.pathname !== '/login') {
      history.replace({
        pathname: '/login'
      });
    }
  };

  const items = [
    {
      key: '1',
      label: 'Logout',
    }
  ];

  const onClick = () => {
    loginOut();
  };

  const menuLogin =
    <div>
      {!localStorage.getItem("userLoginId") &&
        <div>
          <Button className='btn btn-primary' onClick={() => history.push('/login')}>Login</Button>
          <Button className='btn btn-default' onClick={() => history.push('/registro')}>Registro</Button>
        </div>}

      {localStorage.getItem("userLoginId") &&
        <div className="space-align-block">
          <Dropdown menu={{ items, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space align="baseline">
                <p className='fs-xl m-0'>{localStorage.getItem("userLoginUsername")}</p>
                <div className='d-flex justify-content-center ml-3'>
                  <div className='bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center doble-borde'>
                    <UserOutlined className='icon-dashboard-min ' />
                  </div>
                </div>
              </Space>
            </a>

          </Dropdown>
        </div>

      }
    </div >;

  return menuLogin;

};
