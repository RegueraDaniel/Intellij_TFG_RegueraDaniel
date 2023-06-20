import React, { useState } from 'react';
import { history, useModel } from '@umijs/max';
import { PlusCircleOutlined, ContainerOutlined, LineChartOutlined, TagOutlined, EuroCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Alert, Button, Card, DatePicker, Form, Input, Row, Col, Modal, Select, Space, Table, Typography } from 'antd';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const { Text } = Typography;

const Movimientos: React.FC = () => {
    const [form] = Form.useForm();
    const [formFilter, setFormFilter] = useState({});

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Chinese Score',
            dataIndex: 'chinese',
            sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3,
            },
        },
        {
            title: 'Math Score',
            dataIndex: 'math',
            sorter: {
                compare: (a, b) => a.math - b.math,
                multiple: 2,
            },
        },
        {
            title: 'English Score',
            dataIndex: 'english',
            sorter: {
                compare: (a, b) => a.english - b.english,
                multiple: 1,
            },
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            chinese: 98,
            math: 60,
            english: 70,
        },
        {
            key: '2',
            name: 'Jim Green',
            chinese: 98,
            math: 66,
            english: 89,
        },
        {
            key: '3',
            name: 'Joe Black',
            chinese: 98,
            math: 90,
            english: 70,
        },
        {
            key: '4',
            name: 'Jim Red',
            chinese: 88,
            math: 99,
            english: 89,
        },
        {
            key: '1',
            name: 'John Brown',
            chinese: 98,
            math: 60,
            english: 70,
        },
        {
            key: '2',
            name: 'Jim Green',
            chinese: 98,
            math: 66,
            english: 89,
        },
        {
            key: '3',
            name: 'Joe Black',
            chinese: 98,
            math: 90,
            english: 70,
        },
        {
            key: '4',
            name: 'Jim Red',
            chinese: 88,
            math: 99,
            english: 89,
        },
    ];
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

    return (
        <div>

            <Row justify="center" gutter={24}>
                <Col span={24} className='bg-green-gradient text-white pb-4'>
                    <div className='container mt-4 text-white'>
                        <h1 className='text-white'>Movimientos</h1>
                        <Form
                            form={form}
                            layout="inline"
                            initialValues={{
                                status_id: '',
                                estado_recibo: '',
                            }}
                        >
                            <Form.Item name="fecha" label="Fecha" className='ant-m-2'>
                                <RangePicker onChange={'handleUpdateFilterDate'} format={dateFormat} />
                            </Form.Item>

                            <Form.Item name="importe" label="Importe" className='ant-m-2'>
                                <Input.Group compact >
                                    <Input
                                        style={{
                                            width: 100,
                                            textAlign: 'center'
                                        }}
                                        placeholder="Min"
                                        onChange={'handleUpdateFilterInput'}
                                        name="total_min"
                                        id="total_min"
                                    />
                                    <Input
                                        style={{
                                            width: 30,
                                            borderRight: 0,
                                            pointerEvents: 'none',
                                        }}
                                        placeholder="~"
                                        disabled
                                    />
                                    <Input
                                        style={{
                                            width: 100,
                                            textAlign: 'center',
                                        }}
                                        placeholder="Max"
                                        addonAfter="€"
                                        name="total_max"
                                        id="total_max"
                                        onChange={'handleUpdateFilterInput'}
                                    />
                                </Input.Group>
                            </Form.Item>

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


                            <Space align='end'>
                                <Button className='ant-m-2 btn btn-default' onClick={handleResetFilter}>Borrar Filtros</Button>
                                <Button className='ant-m-2 btn btn-default' onClick={handleFilter}>Buscar</Button>
                            </Space>



                        </Form>
                    </div>
                </Col>
            </Row>

            <div className='container mt-4'>

                <Row justify="center" gutter={24}>
                    <Col span={24} className='pt-5 pb-5'>
                        <Table columns={columns} dataSource={data} onChange={onChange} />
                    </Col>
                </Row>

            </div>
        </div >
    );
};

export default Movimientos;
