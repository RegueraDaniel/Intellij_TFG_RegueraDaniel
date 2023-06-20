import { theme, Col, Row, Button, Rate, Space } from 'antd';
import React from 'react';
import { history, useModel } from '@umijs/max';

const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <div>
      <Row className='text-white bg-green-gradient ' justify="center">
        <Col span={8} className='pt-5 pb-5'>
          <img src="img/ejemploweb.png" className='img w-75' />
        </Col>
        <Col span={8} className='pt-5 pb-5 '>
          <p className='fs-lg'>
            La mejor manera de arreglar la economía mundial es empezar por nuestra propia casa y gestionar una casa es lo mismo que una empresa. <br /> <br />
            En ECONOFY puedes registrar tus gastos e ingresos a la vez que recibes pautas y estadísticas sobre cómo controlar el flujo
          </p>
          <Button className='btn btn-default' onClick={() => history.push('/dashboard')}>Entra</Button>
        </Col>
      </Row>

      <div className='text-white bg-green-gradient container-wave'>
        <Row className='slider'>
          <div className="wave"></div>
        </Row>
      </div>


      <div className='container mt-4'>
        <Row justify="center" gutter={20}>
          <Col span={24}>
            <h2 className='text-primary mb-3'>VENTAJAS DE USAR <img src="img/econofy_color_min.png" className='img w-25' /> </h2>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <img src="img/ventaja1.jpg" className="mb-2" alt="" />
              <h3>Toma el control: decide en qué gastar tu dinero.</h3>
            </div>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <img src="img/ventaja2.jpg" className="mb-2" alt="" />
              <h3>Usa esta aplicación para evitar los números rojos.</h3>
            </div>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <img src="img/ventaja3.jpg" className="mb-2" alt="" />
              <h3>Garantiza tu ahorro y cumple tus sueños.</h3>
            </div>

          </Col>
        </Row>

        <Row justify="center" className='mt-5'>

          <Col span={24}>
            <h2 className='text-primary mb-3'>TESTIMONIOS</h2>
          </Col>
          <Col span={8} className='text-center'>
            <img src="img/persona1.jpg" className="rounded-circle testimonio-avatar p-1 bg-primary mb-3 mt-5" />
            <h3>Iván</h3>
            <Rate disabled defaultValue={5} />
            <p className="fs-2 mb-5 mt-5">
              <em>"La aplicación me dio las nociones que no tenía y usándola habitualmente logré ahorrar y comprarme la moto que quería."</em>
            </p>
          </Col>
          <Col span={8} className='text-center'>
            <img src="img/persona2.jpg" className="rounded-circle testimonio-avatar p-1 bg-primary  mb-3 mt-5" />
            <h3>Fátima</h3>
            <Rate disabled defaultValue={5} />
            <p className="fs-2 mb-5 mt-5">
              <em>"Estaba acomplejada de mi boca, pensando que no me podía permitir un dentista. Ahora soy una hormiguita ahorradora y sonriente."</em>
            </p>
          </Col>
          <Col span={8} className='text-center'>
            <img src="img/persona3.jpg" className="rounded-circle testimonio-avatar p-1 bg-primary mb-3 mt-5" />
            <h3>Amelia</h3>
            <Rate disabled defaultValue={5} />
            <p className="fs-2 mb-5 mt-5">
              <em>"Gracias a esta aplicación he dejado de vivir para trabajar y me organizo más escapadas que antes durante todo el año."</em>
            </p>
          </Col>

        </Row>


      </div >


      <div className='bg-green-gradient container-wave'>
        <Row className='slider'>
          <div className="wave2"></div>
        </Row>
      </div>

      <Row  justify="center" className='text-white bg-green-gradient text-center'>
        <Col span={8} className='pt-5 pb-5'>
          <img src="img/derecha.png" className='' />
        </Col>
        <Col span={8} className='pt-5 pb-5 mt-5'>
          <p className='fs-xl'>
            Crea diferentes perfiles para que todos los miembros de la familia ayuden a generar unas cuentas más claras y completas.
          </p>
          <Button className='btn btn-default' onClick={() => history.push('/login')}>Entra</Button>
        </Col>
      </Row>

    </div >
  );
};

export default Welcome;
