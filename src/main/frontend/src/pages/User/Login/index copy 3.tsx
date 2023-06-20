import React, { useState } from 'react';
import { Alert, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText, LoginForm } from '@ant-design/pro-form';
import { useIntl, history, SelectLang, useModel } from 'umi';
import Footer from '@/components/Footer';

import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const { setInitialState } = useModel('@@initialState');
  const intl = useIntl();

  /* const fetchUserInfo = async (userLogin) => {
 
     const usuario = JSON.stringify(userLogin)
     localStorage.setItem("UserLogin", usuario);
     localStorage.setItem("NameLDAP", userLogin.nombreLDAP);
 
     if (userLogin) {
       await setInitialState((s) => ({
         ...s,
         UserLogin: userLogin,
       }));
     }
   };
 */

  const handleSubmit = async (values: API.LoginParams) => {

    history.push('/');
    return;
  };

  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          title="Inicia sesión en tu cuenta"
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >

          {status === 'error' && (
            <LoginMessage
              content='Usuario o contraseña incorrectos'
            />
          )}
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder='Usuario'
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca el usuario.',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder='Password'
              rules={[
                {
                  required: true,
                  message: 'Por favor introduzca la contraseña.',
                },
              ]}
            />
          </>

        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
