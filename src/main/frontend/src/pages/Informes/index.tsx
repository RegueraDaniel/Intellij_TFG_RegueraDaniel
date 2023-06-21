import React, { useState,useEffect } from 'react';
import { history } from '@umijs/max';
import { EditOutlined , DeleteOutlined , LineChartOutlined, TagOutlined, EuroCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Tooltip , Button, Popconfirm , DatePicker, Form, Input, Row, Col, Modal, Select, Space, Table, Typography } from 'antd';
import exportToExcel from '@/util/exportToExcel';
import exportToCsv from '@/util/exportToCsv';

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
        }
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
    const exportToExcelMovimientos = async () => {
        if (Object.entries(data).length != 0) {
          await exportToExcel(data, 'movimientos_informe');
        } 
      }

      const exportToCsvMovimientos = async () => {
        if (Object.entries(data).length != 0) {
          await exportToCsv(data, 'movimientos_informe');
        } 
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
                    <Button className='ant-m-3 btn btn-primary mb-2' onClick={exportToExcelMovimientos}>Exportar a Excel</Button>
                        <Button className='ant-m-3 btn btn-primary mb-2' onClick={exportToCsvMovimientos}>Exportar a CSV</Button>
                        <Table columns={columns} dataSource={data} onChange={onChange} />
                    </Col>
                </Row>

            </div>
        </div >
    );
};

export default Movimientos;
