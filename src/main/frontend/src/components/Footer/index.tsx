import { CopyrightOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import { Card, Radio, Row, Col, Switch, Space, Spin, Button, Alert, Popconfirm, Tooltip, Typography, Table, Select, Form, Upload, Badge, Input } from 'antd';



const Footer: React.FC = () => {

  return (
    <div className='bg-green-gradient text-white'>
      <hr />
      <Row className='container mt-3' justify="center">
        <Col xs={24} sm={12} md={8} lg={8} xl={8} >
          <ul className="footer-list">
            <li><p className="font-weight-bold">Nuestra empresa</p></li>
            <hr />
            <li><a href="#" className="text-white">Quienes somos</a></li>
            <li>
              <p className='fs-xxl mt-3 '>
                <FacebookOutlined className='m-2' />
                <TwitterOutlined className='m-2' />
                <InstagramOutlined className='m-2' />
              </p>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8} >
          <ul className="footer-list">
            <li><p className="font-weight-bold">Avisos legales</p></li>
            <hr />
            <li><a href="#" className="text-white">Cookies</a></li>
            <li><a href="#" className="text-white">Política de privacidad</a></li>
            <li><a href="#" className="text-white">Aviso legal</a></li>
            <li><a href="#" className="text-white">Términos y condiciones</a></li>
          </ul>
        </Col>
        <Col  xs={24} sm={12} md={8} lg={8} xl={8} >
          <ul className="footer-list">
            <li><p className="font-weight-bold">Contacto</p></li>
            <hr />
            <li><a href="#" className="text-decoration-none nav-item text-white">Tlf: +34 123 456 789</a></li>
            <li><a href="#" className="text-decoration-none nav-item text-white">info@econofy.es</a></li>
          </ul>
        </Col>
        <Col className="mt-3" span={24}>
          <p className="text-center text-md-start"><CopyrightOutlined /> 2022 - Econofy</p>
        </Col>
      </Row>
    </div>


    /*<div>
      <hr class="border border-2 opacity-100 m-0"/>
        <section class="container py-3 row mx-auto bg-green">
          <ul class="col col-md-4 nav flex-column text-center text-md-start">
            <li><p class="fw-bold ">Nuestra empresa</p></li>
            <li><a href="#" class="text-decoration-none nav-item text-white">Quienes somos</a></li>
            <li>
              <p>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </p>
            </li>
          </ul>
          <ul class="col-4 nav flex-column d-none d-md-inline">
            <li><p class=" fw-bold ">Avisos legales</p></li>
            <li><a href="#" class="text-decoration-none nav-item text-white">Cookies</a></li>
            <li><a href="#" class="text-decoration-none nav-item text-white">Política de privacidad</a></li>
            <li><a href="#" class="text-decoration-none nav-item text-white">Aviso legal</a></li>
            <li><a href="#" class="text-decoration-none nav-item text-white">Términos y condiciones</a></li>
          </ul>
          <ul class="col-4 nav flex-column d-none d-md-inline">
            <li><p class="fw-bold ">Contacto</p></li>
            <li><a href="#" class="text-decoration-none nav-item text-white">Tlf: +34 123 456 789</a></li>
            <li><a href="#" class="text-decoration-none nav-item text-white">info@econofy.es</a></li>
          </ul>
          <p class="text-center text-md-start"><i class="fa-regular fa-copyright"></i> 2022 - Econofy</p>
        </section>
    </div>*/
  );
};

export default Footer;
