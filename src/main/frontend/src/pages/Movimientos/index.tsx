import React, { useState, useEffect } from 'react';
import { history } from '@umijs/max';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Radio, Button, DatePicker, Form, Input, Row, Col, Modal, Select, Popconfirm, Table, Typography,Tooltip } from 'antd';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const { Text } = Typography;

const Movimientos: React.FC = () => {
    const [form] = Form.useForm();
    const [formFilter, setFormFilter] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        (async () => {
            if (!localStorage.getItem("userLoginId")) {
                history.push('/')
            }
        })();
    }, []);

    const columns = [
        {
            title: 'Num',
            dataIndex: 'key',
        },
        {
            title: 'Usuario',
            dataIndex: 'usuario',
        },
        {
            title: 'Fecha',
            dataIndex: 'fecha',
        },
        {
            title: 'Categoría',
            dataIndex: 'categoria',
            sorter: {
                compare: (a, b) => a.categoria - b.categoria,
                multiple: 2,
            },
        },
        {
            title: 'Movimiento',
            dataIndex: 'movimiento',
            sorter: {
                compare: (a, b) => a.english - b.english,
                multiple: 1,
            },
        },
        {
            title: 'Tipo',
            dataIndex: 'tipo',
            sorter: {
                compare: (a, b) => a.english - b.english,
                multiple: 1,
            },
        },
        {
            title: 'Importe',
            dataIndex: 'importe',
            sorter: {
                compare: (a, b) => a.english - b.english,
                multiple: 1,
            },
        },
        {
            title: 'Acciones',
            dataIndex: 'active',
            key: 'active',
            width: '20%',
            render(text, record) {
                return {
                    children: <div className="text-center">
                        {<Tooltip title="Editar movimiento"><Button type="primary" shape="circle" icon={<EditOutlined />} size='small' style={{ margin: 5 }} /></Tooltip>}
                        {<Popconfirm title="¿Quieres eliminar este movimiento de forma permanente?" icon={<DeleteOutlined />} onConfirm={(id) => changeRateStatus('delete', 1, record.id)}><Tooltip title="Eliminar Tarifa"><Button type="primary" shape="circle"  icon={<DeleteOutlined />} size='small' style={{ margin: 5 }} /></Tooltip></Popconfirm>}
                    </div>,
                };
            },
        },
    ];
    const data = [
        {
            key: '1',
            usuario: 'Daniel',
            fecha:'05-06-2023',
            categoria: 'Transporte',
            movimiento: 'Taller',
            tipo: 'Gasto',
            importe: '230',
        },
        {
            key: '2',
            usuario: 'Daniel',
            fecha:'04-06-2023',
            categoria: 'Compras',
            movimiento: 'Carrefur',
            tipo: 'Gasto',
            importe: '90',
        },
        {
            key: '3',
            usuario: 'Daniel',
            fecha:'04-06-2023',
            categoria: 'Ocio',
            movimiento: 'Burguer',
            tipo: 'Gasto',
            importe: '15',
        },
        {
            key: '4',
            usuario: 'Daniel',
            fecha:'04-06-2023',
            categoria: 'Hogar',
            movimiento: 'Aspiradora',
            tipo: 'Gasto',
            importe: '200',
        },
        {
            key: '5',
            usuario: 'Daniel',
            fecha:'02-06-2023',
            categoria: 'Pago',
            movimiento: 'Juegos',
            tipo: 'Gasto',
            importe: '100',
        },
        {
            key: '6',
            usuario: 'Daniel',
            fecha:'02-06-2023',
            categoria: 'Salud',
            movimiento: 'Dentista',
            tipo: 'Gasto',
            importe: '85',
        },
        {
            key: '7',
            usuario: 'Daniel',
            fecha:'01-06-2023',
            categoria: 'Transporte',
            movimiento: 'Gasolina',
            tipo: 'Gasto',
            importe: '65',
        },
        {
            key: '8',
            usuario: 'Daniel',
            fecha:'29-05-2023',
            categoria: 'Hogar',
            movimiento: 'Nómina',
            tipo: 'Ingreso',
            importe: '1100',
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
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>

            <Row justify="center" gutter={24}>
                <Col span={24} className='bg-green-gradient text-white pb-4'>
                    <div className='container mt-4 text-white'>
                        <h1 className='text-white'>Movimientos</h1>
                        <Button className='ant-m-2 btn btn-default' onClick={showModal}>Crear Movimiento</Button>

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
            <Modal title="Nuevo Movimiento"
                open={isModalOpen}

                onOk={handleOk}
                onCancel={handleCancel}
                okText='Nuevo Movimiento'
                cancelText='Cancelar'
            >
                <hr />
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 15 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item name="fecha" label="Fecha " className='ant-m-2'>
                        <DatePicker onChange={onChange} />
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
                                    value: 'Moda/Belleza',
                                    label: 'Moda/Belleza',
                                },
                                {
                                    value: 'Pago',
                                    label: 'Pago',
                                },
                                {
                                    value: 'Hogar',
                                    label: 'Hogar',
                                }, {
                                    value: 'Compras',
                                    label: 'Compras',
                                },
                                {
                                    value: 'Ocio',
                                    label: 'Ocio',
                                },
                                {
                                    value: 'Salud',
                                    label: 'Salud',
                                },
                                {
                                    value: 'Transporte',
                                    label: 'Transporte',
                                },
                                {
                                    value: 'Restauración',
                                    label: 'Restauración',
                                }
                            ]}
                        />
                    </Form.Item>
                    <Form.Item name="movimiento" label="Movimiento" className='ant-m-2'>
                        <Input />
                    </Form.Item>
                    <Form.Item name="tipo" label="Tipo" className='ant-m-2'>
                        <Radio.Group value='Gasto'>
                            <Radio value='Gasto'>Gasto</Radio>
                            <Radio value='Ingreso'>Ingreso</Radio>
                        </Radio.Group>
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

                </Form>

            </Modal>

        </div >
    );
};

export default Movimientos;
