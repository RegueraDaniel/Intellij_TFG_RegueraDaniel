import React, { useState, useEffect } from 'react';
import { PlusCircleOutlined, ContainerOutlined, LineChartOutlined, TagOutlined, EuroCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Calendar, Button, Badge, DatePicker, Form, Input, Row, Col, Modal, Select, Space, Table, Typography } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import { history } from '@umijs/max';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const { Text } = Typography;


const getListData = (value: Dayjs) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'Aniversario' },
                { type: 'success', content: 'Vacaciones' },
            ];
            break;
        case 10:
            listData = [
                { type: 'warning', content: 'Regalo' },
                { type: 'success', content: 'Vacaciones' },
                { type: 'error', content: 'Mensualidad' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: 'Regalo' },
                { type: 'success', content: 'Vacaciones' },
                { type: 'error', content: 'Mensualidad' },
            ];
            break;
        default:
    }
    return listData || [];
};

const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const Movimientos: React.FC = () => {
    const [form] = Form.useForm();

    useEffect(() => {
        (async () => {
            if (!localStorage.getItem("userLoginId")) {
                history.push('/')
            }
        })();
    }, []);

    const handleFilter = (value) => {
        //buscarMovimientos();
    }

    const handleResetFilter = () => {
        setFormFilter({});
        form.resetFields();
    }

    const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
        <div>

            <Row justify="center" gutter={24}>
                <Col span={24} className='bg-green-gradient text-white pb-4'>
                    <div className='container mt-4 text-white'>
                        <h1 className='text-white'>Crear Aviso</h1>
                        <Form
                            form={form}
                            layout="inline"
                            initialValues={{
                                status_id: '',
                                estado_recibo: '',
                            }}
                        >

                            <Form.Item name="texto" label="Texto del aviso" className='ant-m-2'>
                                <Input id='poliza' placeholder="Texto..." onChange={'handleUpdateFilterInput'} />
                            </Form.Item>

                            <Form.Item name="tipo" label="Tipo " className='ant-m-2'>
                                <Select id='tipo' onChange={'handleUpdateFilterEstadoPago'}
                                    defaultValue={''}
                                    options={[
                                        {
                                            value: '',
                                            label: 'Selecciona',
                                        },
                                        {
                                            value: '1',
                                            label: 'Vacaciones',
                                        },
                                        {
                                            value: '2',
                                            label: 'Mensualidad',
                                        },
                                        {
                                            value: '3',
                                            label: 'Nómina',
                                        }
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item name="fecha" label="Fecha" className='ant-m-2'>
                                <DatePicker onChange={'handleUpdateFilterDate'} format={dateFormat} />
                            </Form.Item>

                            <Space align='start'>
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
                        <Calendar onPanelChange={onPanelChange} cellRender={cellRender} />
                    </Col>
                </Row>

            </div>
        </div >
    );
};

export default Movimientos;
