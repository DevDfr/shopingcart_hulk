import { useState, useEffect, Fragment } from 'react'
import { Layout, Row, Col, message } from 'antd';
import { ShoppingCartOutlined, } from '@ant-design/icons';
import { getApiProducts } from '../../api/products/products'
import { IProduct } from '../../interfaces';
import { HeaderComponent } from '../../components/compose/layout';
import { SliderCardComponent } from '../../components/compose/common';
import { CircleButtonCounterComponent, ModalComponent } from '../../components/generic';
import { CartView } from '..';
import { useAppSelector, useAppDispatch } from '../../state/hooks';
import { addProductIfNotExists, getCartProducts } from '../../state/slice/cartSlice';
import { appValues } from '../../const';

const { Content, } = Layout;

export interface StoreViewProps {
    
}
 
const StoreView: React.FunctionComponent<StoreViewProps> = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const openCart = () => setVisibleModal(true)
    const closeCart = () => setVisibleModal(false)
    const addToCart = (product: IProduct) => {
      if(product.stock > 0)
        dispatch(addProductIfNotExists(product))
      else
        message.warning('No hay unidades disponibles!')
    } 

    const cartProducts = useAppSelector(getCartProducts);

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
                count={cartProducts.length} 
                icon={<ShoppingCartOutlined className="icon-circle-button" />} 
                callback={openCart} 
              />            

            </div>
            
          </Col>

          <Col span={24}>

            <h1 className="view-title">Tienda</h1>

            <div className="view-container">

              <Content>

                  <SliderCardComponent 
                    items={products} 
                    itemControlTitle="Agregar al carrito"
                    itemCallback={addToCart}
                  />

              </Content>

            </div>

          </Col>

        </Row>

        <ModalComponent 
          modalTitle="Carrito de compras"
          closeControlTitle="Volver"
          visible={visibleModal}
          child={<CartView />}
          closeCallback={closeCart}
        />

      </Fragment>      

     );
}
 
export default StoreView;