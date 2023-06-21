import React, { useState, useEffect } from 'react';
import { history } from '@umijs/max';
import { PlusCircleOutlined, ContainerOutlined, LineChartOutlined, TagOutlined, EuroCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Alert, Button, Card, DatePicker, Form, Input, Row, Col, Modal, Select, Space, List, Typography } from 'antd';
import { SkinOutlined, EuroOutlined, HomeOutlined, ShoppingCartOutlined, HeartOutlined,CommentOutlined, CarOutlined, CoffeeOutlined, GiftOutlined,AmazonOutlined } from '@ant-design/icons';


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
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <SkinOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Moda/Belleza</h4>
        </div>,
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <EuroOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Pago</h4>
        </div>,
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <HomeOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Hogar</h4>
        </div>,
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <ShoppingCartOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Compras</h4>
        </div>,
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <GiftOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Ocio</h4>
        </div>,
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <CarOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Transporte</h4>
        </div>,
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <CoffeeOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Restauración</h4>
        </div>,
    ];

    const data2 = [
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <AmazonOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Amazon</h4>
        </div>,
        <div className='d-flex justify-content-center '>
            <div className=' bg-green-gradient rounded-circle div-icon-dashboard-min d-flex justify-content-center'>
                <CommentOutlined className='icon-dashboard-min ' />
            </div><h4 className='ml-4'>Idiomas</h4>
        </div>,
    ];

    return (
        <div>

            <div className='container mt-4'>

                <Row justify="center" gutter={12}>
                    <Col xs={22} sm={22} md={22} lg={12} xl={12}   className='pt-5 pb-5'>
                        <Card title="Mis categorias" >
                            <Button className='m-2 btn btn-primary' onClick={() => history.push('/dashboard')}>Nueva</Button>
                            <List
                                bordered
                                dataSource={data2}
                                renderItem={(item) => (
                                    <List.Item>
                                         {item}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col xs={22} sm={22} md={22} lg={12} xl={12}  className='pt-5 pb-5'>
                        <Card title="Categorias por defecto">
                            <List
                                bordered
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item>
                                        {item}
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
