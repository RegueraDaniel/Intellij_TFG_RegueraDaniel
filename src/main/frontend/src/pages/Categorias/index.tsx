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
                        <Card title="Mis categorias" >
                            <Button className='m-2 btn btn-primary'  onClick={() => history.push('/dashboard')}>Nueva</Button>
                            <List
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
                    <Col span={12} className='pt-5 pb-5'>
                        <Card title="Categorias por defecto">
                            <List
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
