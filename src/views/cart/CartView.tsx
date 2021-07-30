import { Fragment } from "react"
import { Row, Col, Typography, message, } from 'antd';
import NumberFormat from 'react-number-format';
import { useAppSelector, useAppDispatch, } from '../../state/hooks';
import { getCartProducts, getCartTotalOrder, getCartOrder, changeProductUnits, removeProductFromCart, emptyCart, } from "../../state/slice/cartSlice";
import { ProductRowControlComponent } from "../../components/compose/common";
import { IProduct } from '../../interfaces';
import { updateStockApiProduct } from "../../api/products/products";

const { Text } = Typography;

export interface CartViewProps {
    
}
 
const CartView: React.FunctionComponent<CartViewProps> = () => {

    const dispatch = useAppDispatch();

    const cartProducts = useAppSelector(getCartProducts);
    const cartOrder = useAppSelector(getCartOrder)
    const totalOrder = useAppSelector(getCartTotalOrder);

    const handleOrder = (product: IProduct, op: string, val: number) => {
        dispatch(changeProductUnits(product, op, val))
    }

    const removeFromCart = (product: IProduct, counterValue: number) => dispatch(removeProductFromCart(product, counterValue))

    const finalizePurchase = async () => {

        if(cartOrder.length > 0){

            for(let i = 0; i < cartOrder.length; i++){
                const singleProduct = cartProducts.filter(x => x.id === cartOrder[i].id)[0]
                const updateProduct = {
                    ...singleProduct,
                    stock: singleProduct.stock - cartOrder[i].units
                }
                await updateStockApiProduct(updateProduct)
            }

            message.success('Tu compra fue exitosa!')
            dispatch(emptyCart())

            setTimeout(() => {
                window.location.reload()
            }, 1000)
            

        } else
            message.warning('No tienes productos en el carrito!') 
        
    }

    return ( 

        <Fragment>

            <Row>

                <Col span={8}>

                    <Text className="spf" style={{fontSize: '30px'}}>Total: </Text>
                    <Text style={{fontSize: '30px'}} strong>$ <NumberFormat value={totalOrder} displayType={'text'} thousandSeparator={true}/></Text>

                </Col>

                <Col span={6}>

                    <button onClick={finalizePurchase} className="btnadd" style={{marginTop: '10px'}}> 
                        <Text strong className="txtbtnadd">Finalizar Compra</Text> 
                    </button>

                </Col>

            </Row>  

            {
                cartProducts.map(item => (
                
                    <ProductRowControlComponent 
                        key={item.id} 
                        product={item} 
                        counterCallback={handleOrder} 
                        controlTitle="Eliminar"
                        controlCallback={removeFromCart}
                        initialCounter={1}
                        upLimitCounter={item.stock}
                        dwLimitCounter={1}
                    />
                ))
            }

        </Fragment>

     );
}
 
export default CartView;