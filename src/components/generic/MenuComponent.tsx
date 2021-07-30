import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { Dropdown, } from 'antd';
import { DownOutlined, } from '@ant-design/icons';
import { signOut } from '../../api/auth/auth';

export interface MenuComponentProps {
    
}
 
const MenuComponent: React.FunctionComponent<MenuComponentProps> = () => {

    const menu = (
        <Menu>
          <Menu.Item key="0">
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/store">Tienda</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/inventory">Inventario</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="/" onClick={signOut}>Salir</a>
          </Menu.Item>
        </Menu>
      );

    return ( 
        <Dropdown overlay={menu} trigger={['click']}>
            <a style={{color: 'white'}} href="/"> Menu <DownOutlined /> </a>
        </Dropdown>

     );
}
 
export default MenuComponent;