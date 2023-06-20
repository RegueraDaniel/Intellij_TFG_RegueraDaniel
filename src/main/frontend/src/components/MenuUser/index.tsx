import { AppstoreOutlined, ContainerOutlined, LineChartOutlined,TagOutlined,EuroCircleOutlined, CalendarOutlined} from '@ant-design/icons';
import React, { useState } from 'react';
import { Menu, Row, Col } from 'antd';
import type { MenuProps } from 'antd';
import { history } from '@umijs/max';


const items: MenuProps['items'] = [
    {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Movimientos',
        key: 'movimientos',
        icon: <LineChartOutlined />,
    },
    {
        label: 'Categorías',
        key: 'categorias',
        icon: <TagOutlined />,
    },
    {
        label: 'Presupuestos',
        key: 'presupuestos',
        icon: <EuroCircleOutlined />,
    },
    {
        label: 'Avisos',
        key: 'avisos',
        icon: <CalendarOutlined />,
    },
    {
        label: 'Informes',
        key: 'informes',
        icon: <ContainerOutlined />,
    }
];

const MenuUser: React.FC = () => {
    const [current, setCurrent] = useState('dashboard');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        history.push(e.key);
    };

    const dividerItem = {
        type: 'divider', // Must have
      };

    return (
        <Row  className='container'>
            <Col span={24}>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='d-flex justify-content-between' />
            </Col>
        </Row>
    );
};

export default MenuUser;
