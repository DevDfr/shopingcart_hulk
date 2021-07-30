import React, { useState, Fragment } from 'react'
import { MinusOutlined, PlusOutlined, } from '@ant-design/icons';
import { Typography, } from 'antd';

const { Text } = Typography;

export interface CounterComponentProps {
    initialValue: number
    upLimit: number
    dwLimit: number
    counterCallback: (op: string, value: number) => void    
}
 
const CounterComponent: React.FunctionComponent<CounterComponentProps> = (props) => {

    const [contador, setContador] = useState<number>(props.initialValue);

    const up = () => {
        if(contador < props.upLimit ){
            const val = contador + 1
            setContador(val)   
            props.counterCallback('+', val)
        }                
    }

    const dw = () => {
        if(contador > props.dwLimit){
            const val = contador - 1
            setContador(val) 
            props.counterCallback('-', val)
        }            
    }

    return ( 

        <Fragment>

            <button onClick={dw} type="button" className="btn-cant">
                <MinusOutlined />
            </button>
            <span className="counter">
                <Text strong> {contador} </Text>
            </span>
            <button onClick={up} type="button" className="btn-cant">
                <PlusOutlined />
            </button>

        </Fragment>

     );
}
 
export default CounterComponent;