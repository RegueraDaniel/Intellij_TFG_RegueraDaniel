import React, { useState } from 'react';
import { history, useModel } from '@umijs/max';
import { PlusCircleOutlined, ContainerOutlined, LineChartOutlined, TagOutlined, EuroCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Alert, Button, Card, DatePicker, Form, Input, Row, Col, Modal, Select, Space, List, Typography } from 'antd';


const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const { Text } = Typography;

const Movimientos: React.FC = () => {
    const [form] = Form.useForm();
    const [formFilter, setFormFilter] = useState({});

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const handleFilter = (value) => {
        //buscarMovimientos();
    }
    const handleResetFilter = () => {
        setFormFilter({});
        form.resetFields();
    }

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];


    return (
        <div>

            <div className='container mt-4'>

                <Row justify="center" gutter={12}>
                    <Col span={12} className='pt-5 pb-5'>
                        <Card title="Gasto máximo mensual" >
                            <Form
                                form={form}
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                autoComplete="off"
                            >

                                <Form.Item name="categoria" label="Categoría " className='ant-m-2'>
                                    <Select id='categoria' onChange={'handleUpdateFilterEstadoPago'}
                                        defaultValue={''}
                                        options={[
                                            {
                                                value: '',
                                                label: 'Selecciona',
                                            },
                                            {
                                                value: '00',
                                                label: 'Correcto',
                                            },
                                            {
                                                value: '101',
                                                label: 'T. Caducada',
                                            },
                                            {
                                                value: '111',
                                                label: 'Rechazado',
                                            }, {
                                                value: '116',
                                                label: 'Insuficiente',
                                            },
                                            {
                                                value: '501',
                                                label: 'Cobrado',
                                            },
                                            {
                                                value: '502',
                                                label: 'No Implementado',
                                            },
                                            {
                                                value: '506',
                                                label: 'Error',
                                            }
                                        ]}
                                    />
                                </Form.Item>

                                <Form.Item name="importe" label="Importe" className='ant-m-2'>
                                    <Input
                                        style={{
                                            width: 150,
                                            textAlign: 'center',
                                        }}
                                        placeholder="Max"
                                        addonAfter="€"
                                        name="total_max"
                                        id="total_max"
                                        onChange={'handleUpdateFilterInput'}
                                    />
                                </Form.Item>

                                <Space align='center mt-5'>
                                    <Button className='ant-m-2 btn btn-primary' onClick={handleResetFilter}>Borrar Filtros</Button>
                                    <Button className='ant-m-2 btn btn-primary' onClick={handleFilter}>Fijar gasto</Button>
                                </Space>



                            </Form>

                        </Card>
                    </Col>
                    <Col span={12} className='pt-5 pb-5'>
                        <Card title="Ahorros">
                            <Form
                                form={form}
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                autoComplete="off"
                            >


                                <Form.Item name="Nombre" label="Nombre" className='ant-m-2'>
                                    <Input id='nombre' placeholder="Texto..." onChange={'handleUpdateFilterInput'} />
                                </Form.Item>

                                <Form.Item name="importe" label="Importe" className='ant-m-2'>
                                    <Input
                                        style={{
                                            width: 150,
                                            textAlign: 'center',
                                        }}
                                        placeholder="Max"
                                        addonAfter="€"
                                        name="total_max"
                                        id="total_max"
                                        onChange={'handleUpdateFilterInput'}
                                    />
                                </Form.Item>


                                <Form.Item name="importe" label="Importe" className='ant-m-2'>
                                    <Input
                                        style={{
                                            width: 150,
                                            textAlign: 'center',
                                        }}
                                        placeholder="Max"
                                        addonAfter="€"
                                        name="total_max"
                                        id="total_max"
                                        onChange={'handleUpdateFilterInput'}
                                    />
                                </Form.Item>

                                <Space align='center mt-5'>
                                    <Button className='ant-m-2 btn btn-primary' onClick={handleResetFilter}>Borrar Filtros</Button>
                                    <Button className='ant-m-2 btn btn-primary' onClick={handleFilter}>Nuevo ahorro</Button>
                                </Space>



                            </Form>
                        </Card>
                    </Col>
                    <Col span={12} className='pt-5 pb-5'>
                        <Card title="Gastos máximos" >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={12} className='pt-5 pb-5'>
                        <Card title="Metas">
                            <List
                                header={<div>Header</div>}
                                bordered
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Typography.Text mark>Moda/Belleza</Typography.Text> Moda/Belleza
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>

            </div>
        </div >
    );
};

export default Movimientos;
