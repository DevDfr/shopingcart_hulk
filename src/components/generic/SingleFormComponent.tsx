import { Form, Input, InputNumber, Button } from 'antd';

export interface ItemForm {
    type: string
    label: string
    name: string
    required: boolean
    requiredMessage: string
}

export interface SingleFormComponentProps {
    submitTitle: string
    submitCallback: (values: any) => void
    fieldsForm: ItemForm[]
}

const SingleFormComponent: React.FunctionComponent<SingleFormComponentProps> = (props) => {

    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        props.submitCallback(values)
        form.resetFields();
    }

    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 5,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 12,
          },
        },
      };

    return ( 

        <Form
            {...formItemLayout}
            name="basic"
            onFinish={handleSubmit}
            form={form}
        >

            {

                props.fieldsForm.map((item: ItemForm) => {

                    let field = <div></div>

                    if(item.type === 'text') {

                        field = (
                        
                            <Form.Item 
                                label={item.label} 
                                name={item.name} 
                                rules={[{ required: item.required, message: item.requiredMessage }]}
                            > 

                                <Input /> 

                            </Form.Item>
                        )

                    }

                    if(item.type === 'number') {

                        field = (
                        
                            <Form.Item 
                                label={item.label} 
                                name={item.name} 
                                rules={[{ required: item.required, message: item.requiredMessage }]}
                            > 

                                <InputNumber  />

                            </Form.Item>
                        )

                    }                        
                        
                    return field

                })

            }

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    {props.submitTitle}
                </Button>
            </Form.Item>

        </Form>

     );
}
 
export default SingleFormComponent;