import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Asistencias from "../pages/Web/AsistenciasWeb";

const Drawer = createDrawerNavigator()

export default function Sidebar(){
    <Drawer.Navigator
        screenOptions={{
        drawerType: windowWidth >= 768 ? 'permanent' : 'front',
        }}
    >
        <Drawer.Screen name="Asistencia" component={Asistencias}/>
    </Drawer.Navigator>
}