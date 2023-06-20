import { theme } from 'antd';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload,
    Row,
    Col
} from 'antd';
import React from 'react';
import { history, useModel } from '@umijs/max';


const Welcome: React.FC = () => {

    return (
        <div>
            <Row justify="center">
                <Col xs={22} sm={20} md={12} lg={10} xl={8} className='pt-5 pb-5'>
                    <div className='border-radius-xxl bg-green-gradient'>
                        <Form
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            layout="vertical"
                            className='p-4'
                        >
                            <Form.Item id='1' label="Nombre de usuario" className='m-3'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Nombre de pila" className='m-3'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Apellidos" className='m-3'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Teléfono" className='m-3'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Correo electrónico" className='m-3'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Contraseña" className='m-3'>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Repetir Contraseña" className='m-3'>
                                <Input />
                            </Form.Item>
                            <Form.Item className='mt-5'>
                                <Button className='btn btn-gradient w-100'>Registrar</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    ¿Ya eres usuario? Inicia sesión
                </Col>

            </Row>


        </div >
    );
};

export default Welcome;
