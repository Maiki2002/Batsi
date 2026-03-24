import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeMobile from '../pages/Mobile/HomeMobile';
import Asistencias from '../pages/Mobile/AsistenciaMobile';
import Cirugias from '../pages/Mobile/ProgramacionCxMobile';
import Perfil from '../pages/Mobile/PerfilMobile';

const Drawer = createDrawerNavigator()

export default function DrawerNavigatorMobile(){
    return(
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerType: 'front',   // 'slide' | 'back'
                headerShown: true
            }}>
            <Drawer.Screen 
                name='Home'
                component={HomeMobile}
                options={{title:'Home'}}
            />
            <Drawer.Screen 
                name='Asistencias'
                component={Asistencias}
                options={{title:'Asistencias'}}
            />
            <Drawer.Screen 
                name='Programación Cirugias'
                component={Cirugias}
                options={{title:'Programación Cirugias'}}
            />
             <Drawer.Screen 
                name='Perfil'
                component={Perfil}
                options={{title:'Perfil'}}
            />
        </Drawer.Navigator>
    )
}