import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Bemvindo from "../pages/Inicia"
import Telalogin from "../pages/TelaLogin"
import Cadastro from "../pages/CadastroTela";
import DashboardProfessor from "../pages/professor";
import DashboardAluno from "../pages/Alunotela";
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

            <Stack.Screen
            
            
            name="TelaCadastro"
            component={Cadastro}
            options={{headerShown:false}}
            
            />

            
            <Stack.Screen
            name="DashboardProfessor"
            component={DashboardProfessor}
            options={{ headerShown: false }} 
            
            
            
            />

            <Stack.Screen
            name="DashboardAluno"
            component={DashboardAluno}
            options={{ headerShown: false }} 
            
            />
        </Stack.Navigator>
    );
}