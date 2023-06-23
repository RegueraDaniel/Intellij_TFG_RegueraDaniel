import { Column, Pie } from '@ant-design/charts';
import {
  CarOutlined,
  CoffeeOutlined,
  EuroOutlined,
  GiftOutlined,
  HeartOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import { history } from '@umijs/max';
import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import dataColumn from './data.json';
import dataPie from './data1.json';

const Dashboard: React.FC = () => {
  useEffect(() => {
    (async () => {
      if (!localStorage.getItem('userLoginId')) {
        history.push('/');
      }
    })();
  }, []);

  const configCircular = {
    appendPadding: 10,
    data: dataPie,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(2)}%`,
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

  const configColumn = {
    data: dataColumn,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      position: 'bottom',
      // 'top', 'bottom', 'middle'
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return (
    <div>
      <div className="container mt-4">
        <Row>
          <Col sm={24} md={24} lg={24} xl={24} className="pt-5 pb-5 d-flex justify-content-center">
            <img src="img/econofy_color_min.png" className="img w-25 " />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Row justify="center">
              <Col xs={12} sm={8} md={8} lg={6} xl={6} className="mt-3 mb-3">
                <div className="d-flex justify-content-center ">
                  <div className=" bg-primary-light rounded-circle div-icon-dashboard d-flex justify-content-center doble-borde">
                    <SkinOutlined className="icon-dashboard " />
                  </div>
                </div>
                <h4 className="text-center mt-3">Moda</h4>
                <p className="text-center fs-lg font-weight-bold">9.50%</p>
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6} className="mt-3 mb-3">
                <div className="d-flex justify-content-center ">
                  <div className=" bg-primary-light rounded-circle div-icon-dashboard d-flex justify-content-center doble-borde">
                    <EuroOutlined className="icon-dashboard " />
                  </div>
                </div>
                <h4 className="text-center mt-3">Pago</h4>
                <p className="text-center fs-lg font-weight-bold">14.30%</p>
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6} className="mt-3 mb-3">
                <div className="d-flex justify-content-center ">
                  <div className=" bg-primary-light rounded-circle div-icon-dashboard d-flex justify-content-center doble-borde">
                    <HomeOutlined className="icon-dashboard " />
                  </div>
                </div>
                <h4 className="text-center mt-3">Hogar</h4>
                <p className="text-center fs-lg font-weight-bold">7.80%</p>
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6} className="mt-3 mb-3">
                <div className="d-flex justify-content-center ">
                  <div className=" bg-primary-light rounded-circle div-icon-dashboard d-flex justify-content-center doble-borde">
                    <ShoppingCartOutlined className="icon-dashboard " />
                  </div>
                </div>
                <h4 className="text-center mt-3">Compras</h4>
                <p className="text-center fs-lg font-weight-bold">24.10%</p>
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6} className="mt-3 mb-3">
                <div className="d-flex justify-content-center ">
                  <div className=" bg-primary-light rounded-circle div-icon-dashboard d-flex justify-content-center doble-borde">
                    <GiftOutlined className="icon-dashboard " />
                  </div>
                </div>
                <h4 className="text-center mt-3">Ocio</h4>
                <p className="text-center fs-lg font-weight-bold">25.00%</p>
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6} className="mt-3 mb-3">
                <div className="d-flex justify-content-center ">
                  <div className=" bg-primary-light rounded-circle div-icon-dashboard d-flex justify-content-center doble-borde">
                    <HeartOutlined className="icon-dashboard " />
                  </div>
                </div>
                <h4 className="text-center mt-3">Salud</h4>

                <p className="text-center fs-lg font-weight-bold">10.00%</p>
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6} className="mt-3 mb-3">
                <div className="d-flex justify-content-center ">
                  <div className=" bg-primary-light rounded-circle div-icon-dashboard d-flex justify-content-center doble-borde">
                    <CarOutlined className="icon-dashboard " />
                  </div>
                </div>
                <h4 className="text-center mt-3">Transporte</h4>
                <p className="text-center fs-lg font-weight-bold">5.50%</p>
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6} className="mt-3 mb-3">
                <div className="d-flex justify-content-center ">
                  <div className=" bg-primary-light rounded-circle div-icon-dashboard d-flex justify-content-center doble-borde">
                    <CoffeeOutlined className="icon-dashboard " />
                  </div>
                </div>
                <h4 className="text-center mt-3">Restauración</h4>
                <p className="text-center fs-lg font-weight-bold">1.30%</p>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            className="pt-5 pb-5 bg-orange-gradient border-radius-primary text-center"
          >
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

        <hr />
        <Row justify="center" gutter={24}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="pt-5 pb-5 ">
            <h2>Gastos en meses anteriores</h2>
            <Column {...configColumn} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="pt-5 pb-5 ">
            <h2>Gastos de este mes</h2>
            <Pie {...configCircular} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
