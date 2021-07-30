import { default as Slider, Settings } from 'react-slick'
import { ProductCardControlComponent } from '.';
import { IProduct } from '../../../interfaces';

export interface SliderCardComponentProps {
    items: IProduct[]
    itemControlTitle: string
    itemCallback: (product: IProduct) => void
}
 
const SliderCardComponent: React.FunctionComponent<SliderCardComponentProps> = (props) => {

    const defaultSettings: Settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };

    return ( 

        <Slider {...defaultSettings}>

            { 
                props.items.map((item, i) => (
                    
                    <ProductCardControlComponent 
                        key={item.id}
                        product={item}
                        controlTitle={props.itemControlTitle}
                        controlCallback={props.itemCallback}
                    />
                
                )) 
            }

        </Slider>

     );
}
 
export default SliderCardComponent;