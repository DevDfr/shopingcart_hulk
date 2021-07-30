import React from 'react'
import { Typography, Avatar, Row, Col } from 'antd';
import { UserOutlined, } from '@ant-design/icons';
import { MenuComponent } from '../../generic';

const { Text } = Typography;

export interface HeaderComponentProps {
    title: string
    user: string
}
 
const HeaderComponent: React.FunctionComponent<HeaderComponentProps> = (props) => {

    return ( 
        <header>

            <Row>

                <Col span={20} className="align-center">

                    <Text className="header-title header-color-text" strong>{props.title}</Text><br />

                </Col>

                <Col span={4}>

                    <div className="mt-5">

                        <div className="menu-container align-right">

                            <Text className="header-color-text" strong>{props.user}</Text><br />

                            <MenuComponent />
                            
                        </div>

                        <div className="avatar-container align-left">

                            <Avatar icon={<UserOutlined />} />

                        </div>

                    </div>

                </Col>

            </Row>

        </header>
     );
}
 
export default HeaderComponent;