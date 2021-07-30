import { useState } from 'react'
import { Row, Col, Typography, Divider } from 'antd';
import NumberFormat from 'react-number-format';
import { CounterComponent } from '../../generic';
import { IProduct } from '../../../interfaces';

const { Text } = Typography;

export interface ProductRowControlProps {
    product: IProduct
    controlTitle: string
    initialCounter: number
    upLimitCounter: number
    dwLimitCounter: number
    controlCallback: (produce: IProduct, counterValue: number) => void
    counterCallback: (product: IProduct, op: string, val: number) => void
}
 
const ProductRowControl: React.FunctionComponent<ProductRowControlProps> = (props) => {

    const [counterVal, setControlVal] = useState<number>(props.initialCounter)

    const handleCounter = (op: string, val: number) => {
        props.counterCallback(props.product, op, val)
        setControlVal(val)
    }

    const handleControl = () => props.controlCallback(props.product, counterVal)

    return ( 

        <Row>

            <Divider />

            <Col span={12}>

                <Row>

                    <Col span={8}>
                        <img
                            style={{width: '130px', height: '130px'}}
                            alt="img"
                            src={props.product.thumbnail}
                        />
                    </Col>
                    <Col span={16}>
                        <Text className="prodttl" strong> {props.product.title} </Text><br/>
                        <Text className="spf">{props.product.category}</Text><br/>
                        <Text className="cop" strong>$</Text>
                        <Text className="val" strong> <NumberFormat value={props.product.price_real} displayType={'text'} thousandSeparator={true}/> </Text> x1<br/>
                        <Text className="units" strong>{props.product.stock} unidades en Stock</Text>
                    </Col>

                </Row>

            </Col>

            <Col span={12}>

                <Row>

                    <Col span={12}>

                        <p style={{marginTop: '60px'}}>

                            <CounterComponent 
                                initialValue={props.initialCounter} 
                                upLimit={props.upLimitCounter} 
                                dwLimit={props.dwLimitCounter} 
                                counterCallback={handleCounter} 
                            />

                        </p>
                    
                    </Col>

                    <Col span={8}>

                        <button onClick={handleControl} className="btnadd" style={{marginTop: '60px'}}> 
                            <Text strong className="txtbtnadd"> {props.controlTitle} </Text> 
                        </button>

                    </Col>

                </Row>

            </Col>

        </Row>

     );
}
 
export default ProductRowControl;