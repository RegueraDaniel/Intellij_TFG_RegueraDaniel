import {
  borrarMovimientos,
  editarMovimiento,
  guardarMovimientos,
  listarMovimientos,
  verMovimientos,
} from '@/services';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Radio,
  Row,
  Select,
  Spin,
  Table,
  Tooltip,
  message,
} from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const dateFormat = 'DD/MM/YYYY';

const Movimientos: React.FC = () => {
  const [formMovimientos] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdita, setIsModalOpenEdita] = useState(false);

  const [loadingPage, setLoadingPage] = useState(false);
  const [listaMovimientos, setListadoMovimientos] = useState([false]);
  const [fechaFormato, setFechaFormato] = useState('');

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem('userLoginId')) {
        history.push('/');
      }

      setLoadingPage(true);
      const userId = localStorage.getItem('userLoginId');
      const listaMovimientos = await listarMovimientos(userId);
      if (!listaMovimientos) {
        setListadoMovimientos([]);
      } else {
        setListadoMovimientos(listaMovimientos);
      }
      setLoadingPage(false);
    })();
  }, []);

  const columns = [
    {
      title: 'Num',
      dataIndex: 'id',
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
    },
    {
      title: 'Categoría',
      dataIndex: 'miCategoria',
      render(text, record) {
        return <span className="text-capitalize">{record.miCategoria}</span>;
      },
    },
    {
      title: 'Movimiento',
      dataIndex: 'descripcion',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      render(text, record) {
        let tipo = 'Gasto';
        if (record.importe >= 0) {
          tipo = 'Ingreso';
        }
        return tipo;
      },
    },
    {
      title: 'Importe',
      dataIndex: 'importe',
    },
    {
      title: 'Acciones',
      dataIndex: 'active',
      key: 'active',
      render(text, record) {
        return {
          children: (
            <div className="text-center">
              <Tooltip title="Editar movimiento">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EditOutlined />}
                  size="small"
                  style={{ margin: 5 }}
                  onClick={(id) => editaMovimiento(record.id)}
                />
              </Tooltip>

              <Popconfirm
                title="¿Quieres eliminar este movimiento de forma permanente?"
                icon={<DeleteOutlined />}
                onConfirm={(id) => borraMovimiento(record.id)}
              >
                <Tooltip title="Eliminar Movimiento">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<DeleteOutlined />}
                    size="small"
                    style={{ margin: 5 }}
                  />
                </Tooltip>
              </Popconfirm>
            </div>
          ),
        };
      },
    },
  ];

  const onChange = (date, dateString) => {
    setFechaFormato(dateString);
  };

  const showModal = () => {
    formMovimientos.resetFields();
    setIsModalOpen(true);
  };

  const showModalEdita = () => {
    formMovimientos.resetFields();
    setIsModalOpenEdita(true);
  };

  const borraMovimiento = async (id) => {
    setLoadingPage(true);
    await borrarMovimientos(id);

    const userId = localStorage.getItem('userLoginId');
    const listaMovimientos = await listarMovimientos(userId);
    if (!listaMovimientos) {
      setListadoMovimientos([]);
    } else {
      setListadoMovimientos(listaMovimientos);
    }

    setLoadingPage(false);
  };

  const editaMovimiento = async (id) => {
    formMovimientos.resetFields();
    setIsModalOpenEdita(true);

    const verMovimiento = await verMovimientos(id);
    console.log(verMovimiento);
    if (!verMovimiento) {
      setListadoMovimientos([]);
    } else {
      setFechaFormato(verMovimiento.fecha);
      console.log(formMovimientos.getFieldsValue());

      formMovimientos.setFieldsValue({ ['fecha']: dayjs(verMovimiento.fecha, dateFormat) });
      formMovimientos.setFieldsValue({ ['miCategoria']: verMovimiento.miCategoria });
      formMovimientos.setFieldsValue({ ['descripcion']: verMovimiento.descripcion });
      formMovimientos.setFieldsValue({ ['importe']: verMovimiento.importe });
      formMovimientos.setFieldsValue({ ['id']: verMovimiento.id });
      let tipo = 'Gasto';
      if (verMovimiento.importe >= 0) {
        tipo = 'Ingreso';
      }
      formMovimientos.setFieldsValue({ ['tipo']: tipo });
      console.log(formMovimientos.getFieldsValue());
    }
    setLoadingPage(false);
  };

  const handleOk = () => {
    const values = formMovimientos.getFieldsValue();
    values['fecha'] = fechaFormato;
    console.log(values['tipo']);
    if (values['tipo'] === 'Gasto') {
      values['importe'] = '-' + values['importe'];
    }
    console.log(values['tipo']);

    formMovimientos.validateFields({ validateOnly: true }).then(
      async () => {
        console.log(values);
        delete values.tipo;
        console.log(values);

        // Guardamos movimientos
        setLoadingPage(true);
        const userId = localStorage.getItem('userLoginId');

        const guardadoMovimiento = await guardarMovimientos(values, userId);
        if (!guardadoMovimiento) {
          setListadoMovimientos([]);
        } else {
          message.success('Momiento creado');
          setIsModalOpen(false);
        }
        setLoadingPage(false);

        // Volvemos a listar los movimientos
        setLoadingPage(true);
        const listaMovimientos = await listarMovimientos(userId);
        if (!listaMovimientos) {
          setListadoMovimientos([]);
        } else {
          setListadoMovimientos(listaMovimientos);
        }
        setLoadingPage(false);
      },
      () => {
        setIsModalOpen(true);
      },
    );
  };

  const handleOkEditar = () => {
    const values = formMovimientos.getFieldsValue();
    values['fecha'] = fechaFormato;

    if ((values['tipo'] === 'Gasto') && (values['importe'] >0)) {
      values['importe'] = values['importe']*(-1);
    }
    if ((values['tipo'] === 'Ingreso') && (values['importe'] <0)) {
      values['importe'] = values['importe']*(-1);
    }
    formMovimientos.validateFields({ validateOnly: true }).then(
      async () => {

        delete values.tipo;

        // Guardamos movimientos
        setLoadingPage(true);

        const userId = localStorage.getItem('userLoginId');
        const editaMovimiento = await editarMovimiento(values, userId);
        if (!editaMovimiento) {
          setListadoMovimientos([]);
        } else {
          message.success('Momiento creado');
          setIsModalOpenEdita(false);
        }
        setLoadingPage(false);

        // Volvemos a listar los movimientos
        setLoadingPage(true);
        const listaMovimientos = await listarMovimientos(userId);
        if (!listaMovimientos) {
          setListadoMovimientos([]);
        } else {
          setListadoMovimientos(listaMovimientos);
          setIsModalOpenEdita(false);

        }
        setLoadingPage(false);

      },
      () => {
        setIsModalOpenEdita(true);
      },
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalOpenEdita(false);
  };

  return (
    <div>
      <Row>
        <Col span={24} className="bg-green-gradient text-white pb-4">
          <div className="container mt-4 text-white">
            <h1 className="text-white">Movimientos</h1>
            <Button className="ant-m-2 btn btn-default" onClick={showModal}>
              Crear Movimiento
            </Button>
          </div>
        </Col>
      </Row>

      <div className="container mt-4">
        <Row justify="center" gutter={24}>
          <Col span={24} className="pt-5 pb-5">
            <Spin spinning={loadingPage} tip="Buscando usuario">
              <Table columns={columns} dataSource={listaMovimientos} scroll={{ x: '100px' }} />
            </Spin>
          </Col>
        </Row>
      </div>

      <Modal
        title="Nuevo Movimiento"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Nuevo Movimiento"
        cancelText="Cancelar"
      >
        <hr />
        <Form form={formMovimientos} labelCol={{ span: 8 }} wrapperCol={{ span: 15 }}>
          <Form.Item
            name="fecha"
            label="Fecha "
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker onChange={onChange} format={dateFormat} />
          </Form.Item>

          <Form.Item
            name="miCategoria"
            label="Categoría "
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              id="miCategoria"
              options={[
                {
                  value: '',
                  label: 'Selecciona',
                },
                {
                  value: 'moda',
                  label: 'Moda',
                },
                {
                  value: 'pago',
                  label: 'Pago',
                },
                {
                  value: 'hogar',
                  label: 'Hogar',
                },
                {
                  value: 'compras',
                  label: 'Compras',
                },
                {
                  value: 'ocio',
                  label: 'Ocio',
                },
                {
                  value: 'salud',
                  label: 'Salud',
                },
                {
                  value: 'transporte',
                  label: 'Transporte',
                },
                {
                  value: 'restauración',
                  label: 'Restauración',
                },
              ]}
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="descripcion"
            label="Movimiento"
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="tipo"
            label="Tipo"
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Radio.Group value="Gasto">
              <Radio value="Gasto">Gasto</Radio>
              <Radio value="Ingreso">Ingreso</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="importe"
            label="Importe"
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{
                width: 150,
                textAlign: 'center',
              }}
              placeholder="Max"
              addonAfter="€"
              name="total_max"
              id="total_max"
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Editar Movimiento"
        open={isModalOpenEdita}
        onOk={handleOkEditar}
        onCancel={handleCancel}
        okText="Nuevo Movimiento"
        cancelText="Cancelar"
      >
        <hr />
        <Form form={formMovimientos} labelCol={{ span: 8 }} wrapperCol={{ span: 15 }}>
          <Form.Item
            name="fecha"
            label="Fecha "
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker onChange={onChange} format={dateFormat} />
          </Form.Item>

          <Form.Item label="id" name="id" style={{ display: 'none' }}>
            <Input />
          </Form.Item>

          <Form.Item
            name="miCategoria"
            label="Categoría "
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              id="miCategoria"
              options={[
                {
                  value: '',
                  label: 'Selecciona',
                },
                {
                  value: 'moda',
                  label: 'Moda',
                },
                {
                  value: 'pago',
                  label: 'Pago',
                },
                {
                  value: 'hogar',
                  label: 'Hogar',
                },
                {
                  value: 'compras',
                  label: 'Compras',
                },
                {
                  value: 'ocio',
                  label: 'Ocio',
                },
                {
                  value: 'salud',
                  label: 'Salud',
                },
                {
                  value: 'transporte',
                  label: 'Transporte',
                },
                {
                  value: 'restauración',
                  label: 'Restauración',
                },
              ]}
              rules={[
                {
                  required: true,
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="descripcion"
            label="Movimiento"
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="tipo"
            label="Tipo"
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Radio.Group value="Gasto">
              <Radio value="Gasto">Gasto</Radio>
              <Radio value="Ingreso">Ingreso</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="importe"
            label="Importe"
            className="ant-m-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              style={{
                width: 150,
                textAlign: 'center',
              }}
              placeholder="Max"
              addonAfter="€"
              name="total_max"
              id="total_max"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Movimientos;
