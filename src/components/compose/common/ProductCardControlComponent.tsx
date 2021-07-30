import { useState } from 'react'
import { Card, Typography, Divider, Row, Col, Tag, } from 'antd';
import NumberFormat from 'react-number-format';
import { IProduct } from '../../../interfaces';

const { Text } = Typography;

export interface ProductCardControlComponentProps {
    product: IProduct
    controlTitle: string
    controlCallback: (product: IProduct) => void
}
 
const ProductCardControlComponent: React.FunctionComponent<ProductCardControlComponentProps> = (props) => {

    const [btnShow, setbtnShow] = useState<boolean>(false);

    const onBtn = () =>  setbtnShow(true)
    const offBtn = () => setbtnShow(false)
    const handler = () => props.controlCallback(props.product)

    return ( 

        <div onMouseEnter={onBtn} onMouseLeave={offBtn} style={{ width: 300 }}>

            <Card className="pcard" bordered={true}>

                <Row>
                    <Col span={24}>

                        <Row justify="space-around" align="middle">

                            <Col span={12}>

                                <p className="height-120">

                                    <img style={{width: '130px', height: '130px'}} alt="" src={props.product.thumbnail} />

                                </p>
                                
                            </Col>   

                        </Row>                        
                    </Col>

                    <Col span={24}>
                        <Divider></Divider>
                    </Col>

                    <Col span={24}>
                        
                        <Row>

                            <Col span={12} className="align-left">
                                <Text className="spf">{props.product.category}</Text>
                            </Col>
                            <Col span={12} className="align-right">
                                <Tag color="#25c16a">{props.product.net_content}</Tag>
                            </Col>
                            <br />
                            <Col span={24} className="align-left">
                                <Text className="prodttl" strong> {props.product.title} </Text>
                            </Col>

                            <Col span={24} className="align-left">
                                <Text className="cop" strong>$</Text>
                                <Text className="val" strong> <NumberFormat value={props.product.price_real} displayType={'text'} thousandSeparator={true}/> </Text>
                                <Text className="units" strong>x{props.product.units_sf} unids</Text>
                            </Col>

                        </Row>

                    </Col>

                </Row>

            </Card>

            <button onClick={handler} className="btnadd" style={{visibility: btnShow ? 'visible' : 'hidden'}}> 
                <Text strong className="txtbtnadd"> {props.controlTitle} </Text> 
            </button>

        </div>

     );
}
 
export default ProductCardControlComponent;