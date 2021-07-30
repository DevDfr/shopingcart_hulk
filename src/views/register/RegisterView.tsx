import { Layout, Form, Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import { signUp } from '../../api/auth/auth';

const { Content } = Layout;

export interface RegisterViewProps {
    
}

interface ILoginForm {
    username: string,
    password: string
}
 
const RegisterView: React.FunctionComponent<RegisterViewProps> = () => {

    const onFinish = (values: ILoginForm) => {
        signUp(values)
    }

    return ( 

        <Layout>
            
            <Content style={{textAlign: 'center', marginTop: '15%'}}>

                <Row>

                    <Col span={8} offset={6}>

                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            >
                            <Form.Item
                                label="Correo Electronico"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Contraseña"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Registrarse
                                </Button>
                                <Button type="link" htmlType="button" onClick={a => a}>
                                    <Link to="/login">Inicia Sesion</Link>
                                </Button>
                            </Form.Item>

                        </Form>

                    </Col>

                </Row>
                
            

            </Content>

        </Layout>

     );
}
 
export default RegisterView;