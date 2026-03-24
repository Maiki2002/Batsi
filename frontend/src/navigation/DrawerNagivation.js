import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeWeb from '../pages/Web/HomeWeb';
import Asistencias from '../pages/Web/AsistenciasWeb';
import Cirugias from '../pages/Web/ProgramacionCxWeb';
import Perfil from '../pages/Web/PerfilWeb';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerType: 'front',   // 'slide' | 'back'
                headerShown: true
            }}>
            <Drawer.Screen 
                name='Home'
                component={HomeWeb}
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

