import { useState, useEffect, Fragment } from 'react'
import { List, Row, Col, message } from 'antd';
import { PlusSquareOutlined, } from '@ant-design/icons';
import { HeaderComponent } from "../../components/compose/layout";
import { ProductRowControlComponent } from "../../components/compose/common";
import { CircleButtonCounterComponent, ModalComponent, SingleFormComponent } from '../../components/generic';
import { getApiProducts } from '../../api/products/products'
import { IProduct, INewProduct } from '../../interfaces';
import { updateStockApiProduct, insertNewApiProduct } from '../../api/products/products';
import { fieldsForm } from './productForm';
import { appValues } from '../../const';

export interface InventoryViewProps {
    
}
 
const InventoryView: React.FunctionComponent<InventoryViewProps> = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    const openModal = () => setVisibleModal(true)
    const closeModal = () => setVisibleModal(false)

    const addStockProduct = async (product: IProduct, counterValue: number) => {
        
        if(counterValue > 0){

            const updateProduct: IProduct = {
                ...product,
                stock: product.stock + counterValue
            }

            await updateStockApiProduct(updateProduct)

            const filterProducts = products.filter(x => x.id !== product.id)

            setProducts([...filterProducts, updateProduct])

            message.success(`Agregaste ${counterValue} unidades al Stock`)

        } else
            message.error('Debes agregar por lo menos 1 unidad al Stock!')
        
    }

    const addProduct = async (values: any) => {

        const { category, net_content, price_real, stock, thumbnail, title, units_sf } = values

        const insertProduct: INewProduct = {
            category,
            net_content,
            price_real,
            stock,
            thumbnail,
            title,
            units_sf,
        }

        const newProduct: IProduct = await insertNewApiProduct(insertProduct)

        setProducts([...products, newProduct])

        message.success('Producto registrado con exito!')
        

    }

    useEffect(() => {
        getApiProducts().then(res => setProducts(res))
    }, [])

    return ( 

        <Fragment>

            <HeaderComponent title={appValues.storeName} user="Default" />
            
            <Row>

                <Col span={24} className="align-right">

                    <div className="circle-button-container">

                        <CircleButtonCounterComponent 
                            count={0} 
                            icon={<PlusSquareOutlined className="icon-circle-button" />} 
                            callback={openModal} 
                        />            

                    </div>

                </Col>

                <Col span={24}>

                    <h1 className="view-title">Inventario</h1>

                    <div className="view-container">

                        <List itemLayout="vertical" size="small" >

                            {
                                products.map(item => (
                                                    
                                    <ProductRowControlComponent 
                                        key={item.id} 
                                        product={item} 
                                        counterCallback={a => a} 
                                        controlTitle="Agregar Stock"
                                        controlCallback={addStockProduct}
                                        initialCounter={0}
                                        upLimitCounter={9999999}
                                        dwLimitCounter={0}
                                    />
                                ))

                            }

                        </List>

                    </div>                    

                </Col>

            </Row>

            <ModalComponent 
                modalTitle="Agregar Producto"
                closeControlTitle="Volver"
                visible={visibleModal}
                child={<SingleFormComponent fieldsForm={fieldsForm} submitTitle="Registrar Producto" submitCallback={addProduct} />}
                closeCallback={closeModal}
            />

        </Fragment>      
     );
}
 
export default InventoryView;