import { Button, Form, Input, Typography, Row, Col, message } from 'antd';
import React from 'react';
import { history, useModel } from '@umijs/max';
import { loginUser } from '@/services';

const Welcome: React.FC = () => {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const registrar = async (values) => {
        console.log('registrar', values);
        form.validateFields()

        const data = {};
        data['email'] = 'danielreguerabazan@gmail.com';
        data['password'] = 'admin1234';
        console.log(data);

        try {
            const userLogin = await loginUser(data);
            if (userLogin) {
                localStorage.setItem("user", userLogin);
            }
        } catch (error) {
            console.log('ha dado error', error);
            message.error('Acceso denegado, intentelo de nuevo');
        }

    };

    return (
        <div>
            <Row justify="center">
                <Col xs={22} sm={20} md={12} lg={10} xl={8} className='pt-5 pb-5'>
                    <h1 className='text-center text-primary'>Inicia sesión con tu cuenta</h1>
                    <div className='border-radius-xxl border-primary'>
                        <Form
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            layout="vertical"
                            className='p-4'
                            form={form}
                        >
                            <Form.Item name='email' label="Correo eléctronico" className='m-3' rules={[{ required: true, message: 'Introduzca su email' }, { type: 'email', message: 'No es un formato válido' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name='pass' label="Contraseña" className='m-3' rules={[{ required: true, message: 'Introduzca su contraseña' }]}>
                                <Input.Password />
                            </Form.Item>
                            <Form.Item className='mt-5'>
                                <Button className='btn btn-gradient w-100' onClick={registrar} htmlType="submit">Registrar</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <p className='text-right'>¿Aun no eres usuario? <Typography.Link>Registrate</Typography.Link></p>
                </Col>
            </Row>
        </div >
    );
};

export default Welcome;
