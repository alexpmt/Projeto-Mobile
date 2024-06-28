import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Bemvindo from "../pages/Inicia"
import Telalogin from "../pages/TelaLogin"

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
            
            name="Bemvindo"
            component={Bemvindo}
            options={{headerShown:false}}
            />
             <Stack.Screen
            
            name="Telalogin"
            component={Telalogin}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    );
}