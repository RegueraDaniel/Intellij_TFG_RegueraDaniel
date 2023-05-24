import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <hr class="border border-2 opacity-100 m-0"/>
        <section class="container py-3 row mx-auto">
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
    </div>
  );
};

export default Footer;
