import { Modal, Button, } from 'antd';

export interface ModalComponentProps {
    modalTitle: string
    visible: boolean
    child: JSX.Element
    closeControlTitle: string
    closeCallback: () => void
}
 
const ModalComponent: React.FunctionComponent<ModalComponentProps> = (props) => {
    return ( 

        <Modal 
            width={1000} 
            title={<h1> {props.modalTitle} </h1>}
            visible={props.visible} 
            onCancel={props.closeCallback}
            footer={[
                <Button type="text" key="back" onClick={props.closeCallback}>
                    {props.closeControlTitle}
                </Button>
                ]}
        >

            {props.child}

        </Modal>

     );
}
 
export default ModalComponent;