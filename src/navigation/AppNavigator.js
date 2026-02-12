import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNagivation";

import LoginWeb from "../pages/Web/LoginWeb";
import HomeWeb from "../pages/Web/HomeWeb"

const Stack = createNativeStackNavigator()

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginWeb">
                <Stack.Screen 
                    name="LoginWeb"
                    component={LoginWeb}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='Sidebar'
                    component={DrawerNavigator}
                    options={{ headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}