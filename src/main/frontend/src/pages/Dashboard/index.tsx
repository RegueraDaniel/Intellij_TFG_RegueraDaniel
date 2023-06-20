import { Button, Form, Input, Typography, Row, Col } from 'antd';
import React from 'react';
import { history, useModel } from '@umijs/max';
import { PlusCircleOutlined, ContainerOutlined, LineChartOutlined, TagOutlined, EuroCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { Pie, Histogram } from '@ant-design/charts';
import data2 from './data.json'
import data from './data1.json'

const Dashboard: React.FC = () => {

    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    const config2 = {
        data,
        binField: 'depth',
        binWidth: 2,
        stackField: 'cut',
        coloField: 'color',
        tooltip: {
            showMarkers: false,
            position: 'top',
        },
        interactions: [
            {
                type: 'element-highlight',
            },
        ],
    };

    return (
        <div>
            <div className='container mt-4'>

                <Row justify="center" gutter={24}>
                    <Col span={24} className='pt-5 pb-5'>
                        <img src="img/econofy_color_min.png" className='img w-25 d-flex justify-content-between' />
                    </Col>
                </Row>

                <Row justify="center" gutter={24}>
                    <Col span={16} className=''>
                        <Row justify="center" gutter={0}>
                            <Col span={6} className='pt-5 pb-5 bg-green-gradient'>
                                <PlusCircleOutlined />
                            </Col>
                            <Col span={6} className='pt-5 pb-5 bg-green-gradient'>
                                <PlusCircleOutlined />
                            </Col>
                            <Col span={6} className='pt-5 pb-5 bg-green-gradient'>
                                <PlusCircleOutlined />
                            </Col>
                            <Col span={6} className='pt-5 pb-5 bg-green-gradient'>
                                <PlusCircleOutlined />
                            </Col>
                            <Col span={6} className='pt-5 pb-5 bg-green-gradient'>
                                <PlusCircleOutlined />
                            </Col>
                            <Col span={6} className='pt-5 pb-5 bg-green-gradient'>
                                <PlusCircleOutlined />
                            </Col>
                            <Col span={6} className='pt-5 pb-5 bg-green-gradient'>
                                <PlusCircleOutlined />
                            </Col>
                            <Col span={6} className='pt-5 pb-5 bg-green-gradient'>
                                <PlusCircleOutlined />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} className='pt-5 pb-5 bg-orange-gradient border-radius-primary text-center'>
                        <h2>Límite Global</h2>
                        <p>1.000€</p>
                        <p>27'92€</p>
                        <br />
                        <h2>Límite Categoría</h2>
                        <p>Ocio</p>
                        <p>300€</p>
                        <p>14'92€</p>
                    </Col>
                </Row>

                <Row justify="center" gutter={24}>
                    <Col span={16} className='pt-5 pb-5'>
                        <img src="img/econofy_color_min.png" className='img w-25 d-flex justify-content-between' />
                    </Col>
                </Row>
                <Row justify="center" gutter={24}>
                    <Col span={16} className=''>
                        <h2>Gastos en meses anteriores</h2>
                        <Histogram {...config2} />

                    </Col>
                    <Col span={6} className='pt-5 pb-5 '>
                        <h2>Gastos del mes</h2>
                        <Pie {...config} />
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default Dashboard;
