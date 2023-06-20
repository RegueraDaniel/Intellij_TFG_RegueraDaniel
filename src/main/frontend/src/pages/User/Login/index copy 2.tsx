import { Footer } from '@/components';
import { login } from '@/services/ant-design-pro/api';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { FormattedMessage, history, SelectLang, useIntl, useModel, Helmet } from '@umijs/max';
import { Alert, message, Tabs } from 'antd';
import Settings from '../../../../config/defaultSettings';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import { bootstrap } from '../../../../style/bootstra.scss';

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
 
 
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"></link>
      <link rel="stylesheet" href="../../style/css/bootstrap.css"></link>

      <header className=" gradient-primary ">
        <div className="container row justify-content-between mx-auto">

          <div className=" col-6 col-md-3 my-auto">
            <a href="../index.html"><img className="img-fluid m-3 " src="../img/negativo.png" alt="" /></a>
          </div>

          <nav className="col-5 m-0 p-3">

            <div className="d-none d-md-inline float-end ">
              <button className="btn btn-white btn-outline-primary btn-radius-lg fw-bold px-3" onclick="location.href='registro.html';"> Registro</button>
            </div>

          </nav>
        </div>

        <hr className="border border-2opacity-100 m-0 " />
      </header>
      <main className="container py-5 ">
        <div class="col-12 col-md-8 col-lg-6 mx-auto ">
          <form class="border p-5" action="dashboard.html">
            <p class="h4 mb-3">Inicia sesión en tu cuenta</p>
            <div class="">
              <button class="form-control border-success text-primary col-12 my-2"> <i class="fa-brands fa-google text-danger me-5"></i> Inicia sesión con Google</button>
              <button class="form-control border-success text-primary col-12 my-2"> <i class="fa-brands fa-facebook text-info-emphasis me-5"></i>  Inicia sesión con Facebook</button>
              <button class="form-control border-success text-primary col-12 my-2"> <i class="fa-brands fa-twitter text-info me-5"></i>  Inicia sesión con Facebook</button>
            </div>
            <div class="row text-dark mx-auto">
              <hr class="border border-2 opacity-100 col-5 my-auto" />
              <i class="fa-regular fa-circle col-2 text-center p-3 text-body-tertiary"></i>
              <hr class="border border-2 opacity-100 col-5 my-auto" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Correó electrónico/móvil</label>
              <input class="form-control" id="emailOrTlf" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <button type="submit" class="btn btn-primary text-white fw-bold col-12" >Iniciar sesión</button>
            <div class="mt-3 ">
              <a class="text-black-50" href="">¿Has olvidado tu contraseña?</a>
            </div>

          </form>
          <div class="mt-3 text-end">
            <a class="" href='registro.html'>¿Aún no eres usuario? <span class="fw-bold">Regístrate:</span> </a>
          </div>

        </div>

      </main>
      <footer class=" gradient-primary text-white">
        <div w3-include-html="../site/layouts/footer.html"></div>
      </footer>

      <script src="./js/bootstrap.bundle.min.js"></script>
      <script src="./js/bootstrap.esm.min.js"></script>
      <script src="../js/include.js"></script>

      <Footer />
    </div>
  );
};

export default Login;
