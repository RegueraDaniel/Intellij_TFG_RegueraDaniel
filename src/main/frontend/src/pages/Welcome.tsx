import { history } from '@umijs/max';
import { Button, Col, Rate, Row } from 'antd';
import React, { useEffect } from 'react';

const Welcome: React.FC = () => {

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('userLoginId')) {
        history.push('/dashboard');
      }
    })();
  }, []);

  return (
    <div>
      <Row className="text-white bg-green-gradient " justify="center">
        <Col xs={18} sm={14} md={14} lg={8} xl={8} className="pt-5 pb-5">
          <img src="img/ejemploweb.png" className="img w-75" />
        </Col>
        <Col xs={18} sm={14} md={14} lg={8} xl={8} className="pt-5 pb-5 ">
          <p className="fs-lg">
            La mejor manera de arreglar la economía mundial es empezar por nuestra propia casa y
            gestionar una casa es lo mismo que una empresa. <br /> <br />
            En ECONOFY puedes registrar tus gastos e ingresos a la vez que recibes pautas y
            estadísticas sobre cómo controlar el flujo
          </p>
          <Button className="btn btn-default" onClick={() => history.push('/login')}>
            Entra
          </Button>
        </Col>
      </Row>

      <div className="text-white bg-green-gradient container-wave">
        <Row className="slider">
          <div className="wave"></div>
        </Row>
      </div>

      <div className="container mt-4">
        <Row justify="center" gutter={20}>
          <Col span={24}>
            <h2 className="text-primary mb-3">
              VENTAJAS DE USAR <img src="img/econofy_color_min.png" className="img w-25" />{' '}
            </h2>
          </Col>
          <Col xs={18} sm={14} md={8} lg={8} xl={8}>
            <div className="text-center">
              <img src="img/ventaja1.jpg" className="mb-2" alt="" />
              <h3>Toma el control: decide en qué gastar tu dinero.</h3>
            </div>
          </Col>
          <Col xs={20} sm={18} md={8} lg={8} xl={8}>
            <div className="text-center">
              <img src="img/ventaja2.jpg" className="mb-2" alt="" />
              <h3>Usa esta aplicación para evitar los números rojos.</h3>
            </div>
          </Col>
          <Col xs={20} sm={18} md={8} lg={8} xl={8}>
            <div className="text-center">
              <img src="img/ventaja3.jpg" className="mb-2" alt="" />
              <h3>Garantiza tu ahorro y cumple tus sueños.</h3>
            </div>
          </Col>
        </Row>

        <Row justify="center" className="mt-5">
          <Col span={24}>
            <h2 className="text-primary mb-3">TESTIMONIOS</h2>
          </Col>
          <Col xs={20} sm={18} md={8} lg={8} xl={8} className="text-center">
            <img
              src="img/persona1.jpg"
              className="rounded-circle doble-borde p-1 bg-primary mb-3 mt-5"
            />
            <h3>Iván</h3>
            <Rate disabled defaultValue={5} />
            <p className="fs-2 mb-5 mt-5">
              <em>
                "La aplicación me dio las nociones que no tenía y usándola habitualmente logré
                ahorrar y comprarme la moto que quería."
              </em>
            </p>
          </Col>
          <Col xs={20} sm={18} md={8} lg={8} xl={8} className="text-center">
            <img
              src="img/persona2.jpg"
              className="rounded-circle doble-borde p-1 bg-primary  mb-3 mt-5"
            />
            <h3>Fátima</h3>
            <Rate disabled defaultValue={5} />
            <p className="fs-2 mb-5 mt-5">
              <em>
                "Estaba acomplejada de mi boca, pensando que no me podía permitir un dentista. Ahora
                soy una hormiguita ahorradora y sonriente."
              </em>
            </p>
          </Col>
          <Col xs={20} sm={18} md={8} lg={8} xl={8} className="text-center">
            <img
              src="img/persona3.jpg"
              className="rounded-circle doble-borde p-1 bg-primary mb-3 mt-5"
            />
            <h3>Amelia</h3>
            <Rate disabled defaultValue={5} />
            <p className="fs-2 mb-5 mt-5">
              <em>
                "Gracias a esta aplicación he dejado de vivir para trabajar y me organizo más
                escapadas que antes durante todo el año."
              </em>
            </p>
          </Col>
        </Row>
      </div>

      <div className="bg-green-gradient container-wave">
        <Row className="slider">
          <div className="wave2"></div>
        </Row>
      </div>

      <Row justify="center" className="text-white bg-green-gradient text-center">
        <Col xs={18} sm={14} md={14} lg={8} xl={8} className="pt-5 pb-5">
          <img src="img/derecha.png" className="" />
        </Col>
        <Col xs={18} sm={14} md={14} lg={8} xl={8} className="pt-5 pb-5 mt-5">
          <p className="fs-xl">
            Crea diferentes perfiles para que todos los miembros de la familia ayuden a generar unas
            cuentas más claras y completas.
          </p>
          <Button className="btn btn-default" onClick={() => history.push('/login')}>
            Entra
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
