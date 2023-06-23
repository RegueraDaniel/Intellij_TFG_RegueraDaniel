import { loginUser } from '@/services';
import { history } from '@umijs/max';
import { Button, Col, Form, Input, Row, Spin, Typography, message } from 'antd';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [loadingPage, setLoadingPage] = useState(false);

  const registrar = async (values) => {
    form.validateFields(values);

    setLoadingPage(true);
    try {
      const userData = form.getFieldsValue(values);
      const userLogin = await loginUser(userData);

      if (userLogin) {
        localStorage.setItem('userLoginId', userLogin.id);
        localStorage.setItem('userLoginUsername', userLogin.username);
        localStorage.setItem('userLoginurlImg', userLogin.urlImg);
      }
      history.push('/dashboard');
    } catch (error) {
      message.error('Acceso denegado, intentelo de nuevo');
    }
    setLoadingPage(false);
  };

  return (
    <div>
      <Spin spinning={loadingPage} tip="Buscando usuario">
        <Row justify="center">
          <Col xs={22} sm={20} md={12} lg={10} xl={8} className="pt-5 pb-5">
            <h1 className="text-center text-primary">Inicia sesión con tu cuenta</h1>
            <div className="border-radius-xxl border-primary">
              <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="vertical"
                className="p-4"
                form={form}
              >
                <Form.Item
                  name="email"
                  label="Correo eléctronico"
                  className="m-3"
                  rules={[
                    { required: true, message: 'Introduzca su email' },
                    { type: 'email', message: 'No es un formato válido' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Contraseña"
                  className="m-3"
                  rules={[{ required: true, message: 'Introduzca su contraseña' }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item className="mt-5">
                  <Button className="btn btn-gradient w-100" onClick={registrar} htmlType="submit">
                    Registrar
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <p className="text-right">
              ¿Aun no eres usuario?{' '}
              <Typography.Link onClick={() => history.push('/registro')}>
                Registrate
              </Typography.Link>
            </p>
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default Login;
