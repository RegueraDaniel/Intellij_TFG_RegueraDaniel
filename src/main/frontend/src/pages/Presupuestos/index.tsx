import React, { useState, useEffect } from 'react';
import { history } from '@umijs/max';
import { EditOutlined, DeleteOutlined, ShoppingCartOutlined, CarOutlined, EuroCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Tooltip, Button, Card, DatePicker, Form, Input, Row, Col, Popconfirm, Select, Space, List, Typography } from 'antd';


const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const { Text } = Typography;

const Movimientos: React.FC = () => {
    const [form] = Form.useForm();
    const [formFilter, setFormFilter] = useState({});

    useEffect(() => {
        (async () => {
            if (!localStorage.getItem("userLoginId")) {
                history.push('/')
            }
        })();
    }, []);

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
                    <Col xs={22} sm={22} md={22} lg={12} xl={12} className='pt-5 pb-5'>
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
                    <Col xs={22} sm={22} md={22} lg={12} xl={12} className='pt-5 pb-5'>
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
                    <Col xs={22} sm={22} md={12} lg={12} xl={12} className='pt-5 pb-5'>
                        <Card title="Gastos máximos" >
                            <div className="text-center">
                                Global: 2000€ {<Tooltip title="Editar movimiento"><Button type="primary" shape="circle" icon={<EditOutlined />} size='small' style={{ margin: 5 }} /></Tooltip>}
                                {<Popconfirm title="¿Quieres eliminar este movimiento de forma permanente?" icon={<DeleteOutlined />} onConfirm={(id) => changeRateStatus('delete', 1, record.id)}><Tooltip title="Eliminar Tarifa"><Button type="primary" shape="circle" icon={<DeleteOutlined />} size='small' style={{ margin: 5 }} /></Tooltip></Popconfirm>}
                            </div>
                            <div className="text-center">
                                <ShoppingCartOutlined /> Ocio: 300€ {<Tooltip title="Editar movimiento"><Button type="primary" shape="circle" icon={<EditOutlined />} size='small' style={{ margin: 5 }} /></Tooltip>}
                                {<Popconfirm title="¿Quieres eliminar este movimiento de forma permanente?" icon={<DeleteOutlined />} onConfirm={(id) => changeRateStatus('delete', 1, record.id)}><Tooltip title="Eliminar Tarifa"><Button type="primary" shape="circle" icon={<DeleteOutlined />} size='small' style={{ margin: 5 }} /></Tooltip></Popconfirm>}
                            </div>
                            <div className="text-center">
                                <CarOutlined /> Transporte: 50€ {<Tooltip title="Editar movimiento"><Button type="primary" shape="circle" icon={<EditOutlined />} size='small' style={{ margin: 5 }} /></Tooltip>}
                                {<Popconfirm title="¿Quieres eliminar este movimiento de forma permanente?" icon={<DeleteOutlined />} onConfirm={(id) => changeRateStatus('delete', 1, record.id)}><Tooltip title="Eliminar Tarifa"><Button type="primary" shape="circle" icon={<DeleteOutlined />} size='small' style={{ margin: 5 }} /></Tooltip></Popconfirm>}
                            </div>
                        </Card>
                    </Col>
                    <Col xs={22} sm={22} md={12} lg={12} xl={12} className='pt-5 pb-5'>
                        <Card title="Metas">
                            <div className="text-center">
                                <h4> Viaje a Egipto {<Tooltip title="Editar movimiento"><Button type="primary" shape="circle" icon={<EditOutlined />} size='small' style={{ margin: 5 }} /></Tooltip>}
                                    {<Popconfirm title="¿Quieres eliminar este movimiento de forma permanente?" icon={<DeleteOutlined />} onConfirm={(id) => changeRateStatus('delete', 1, record.id)}><Tooltip title="Eliminar Tarifa"><Button type="primary" shape="circle" icon={<DeleteOutlined />} size='small' style={{ margin: 5 }} /></Tooltip></Popconfirm>}
                                </h4>
                                <hr />
                            </div>
                            <div className="text-center">
                                <p>Mensualidad: 100€ </p>
                                <p>Total: 6000€ </p>
                                <p>Fecha Prevista: 300€ </p>

                            </div>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div >
    );
};

export default Movimientos;
