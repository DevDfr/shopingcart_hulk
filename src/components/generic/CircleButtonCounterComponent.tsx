import { Badge, Button } from 'antd';

export interface CircleButtonCounterComponentProps {
    count: number
    icon: JSX.Element
    callback: () => void
}
 
const CircleButtonCounterComponent: React.FunctionComponent<CircleButtonCounterComponentProps> = (props) => {
    return ( 

        <Badge count={props.count}>

            <Button 
                className="custom-circle-button"
                shape="circle" 
                icon={props.icon} 
                onClick={props.callback}
            />

        </Badge>

     );
}
 
export default CircleButtonCounterComponent;