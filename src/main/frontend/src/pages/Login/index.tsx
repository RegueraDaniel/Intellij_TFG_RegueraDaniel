import { Button, Form, Input, Typography, Row, Col, message, Spin } from 'antd';
import React, { useState } from 'react';
import { history, useModel } from '@umijs/max';
import { loginUser } from '@/services';
import { flushSync } from 'react-dom';

const Welcome: React.FC = () => {
    const [form] = Form.useForm();
    const { initialState, setInitialState } = useModel('@@initialState');
    const [loadingPage, setLoadingPage] = useState(false);

    const onReset = () => {
        form.resetFields();
    };

    const registrar = async (values) => {
        console.log('registrar', values);
        form.validateFields(values)
        
        const data = {};
        data['email'] = 'danielreguerabazan@gmail.com';
        data['password'] = 'admin1234';

        setLoadingPage(true)
        try {
            const userLogin = await loginUser(data);
            if (userLogin) {
                localStorage.setItem("userLoginId", userLogin.id);
                localStorage.setItem("userLoginUsername", userLogin.username);
                localStorage.setItem("userLoginurlImg", userLogin.urlImg);
            }
        } catch (error) {
            message.error('Acceso denegado, intentelo de nuevo');
            const userLogin = {
                "id": 1,
                "username": "Daniel",
                "nombrePila": "danichan",
                "apellidos": "tachan",
                "tlf": "123456789",
                "email": "danielreguerabazan@gmail.com",
                "password": "X9cLA4/ZfCGhnGmqV6GhpQ==",
                "urlImg": "none",
                "maxGastoGlobal": null,
                "categorias": [
                    {
                        "id": 1,
                        "nombreCat": "CAT_GASTO",
                        "icono": "urlBolsa.es",
                        "color": "f00000",
                        "porDefecto": false,
                        "maxMensualCat": null,
                        "movimientos": []
                    },
                    {
                        "id": 2,
                        "nombreCat": "CAT_GASTO2",
                        "icono": "urlBolsa.es",
                        "color": "f00000",
                        "porDefecto": false,
                        "maxMensualCat": null,
                        "movimientos": []
                    },
                    {
                        "id": 11,
                        "nombreCat": "CAT_GASTO3",
                        "icono": "urlBolsa.es",
                        "color": "f00000",
                        "porDefecto": false,
                        "maxMensualCat": 0.00,
                        "movimientos": []
                    },
                    {
                        "id": 12,
                        "nombreCat": "CAT_GASTO4",
                        "icono": "urlBolsa.es",
                        "color": "f00000",
                        "porDefecto": false,
                        "maxMensualCat": 0.00,
                        "movimientos": []
                    },
                    {
                        "id": 13,
                        "nombreCat": "moda",
                        "icono": "iconoModa",
                        "color": "color1",
                        "porDefecto": true,
                        "maxMensualCat": 0.00,
                        "movimientos": []
                    }
                ],
                "metas": [],
                "avisos": []
            }
            localStorage.setItem("userLoginId", userLogin.id);
            localStorage.setItem("userLoginUsername", userLogin.username);
            localStorage.setItem("userLoginurlImg", userLogin.urlImg);
            const userLoginId = localStorage.getItem("userLoginId")
            const userLoginUsername = localStorage.getItem("userLoginUsername")
            const userLoginurlImg = localStorage.getItem("userLoginurlImg")
        }
        setLoadingPage(false)
        await fetchUserInfo();
        history.push('/dashboard')
    };

    const fetchUserInfo = async () => {
        const userInfo = await initialState?.fetchUserInfo?.();
        if (userInfo) {
            flushSync(() => {
                setInitialState((s) => ({
                    ...s,
                    currentUser: userInfo,
                }));
            });
        }
    };

    return (
        <div>
            <Spin spinning={loadingPage} tip="Buscando usuario" >
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
            </Spin>
        </div >
    );
};

export default Welcome;
