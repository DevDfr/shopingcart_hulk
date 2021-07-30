import { HeaderComponent } from '../../components/compose/layout';
import { appValues } from '../../const';

export interface HomeViewProps {
    
}
 
const HomeView: React.FunctionComponent<HomeViewProps> = () => {

    return ( 
        <HeaderComponent title={appValues.storeName} user="Default" />
     );
}
 
export default HomeView;