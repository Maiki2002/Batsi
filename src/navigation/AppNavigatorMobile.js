import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigatorMobile from "./DrawerNavigatorMobile";
import LoginMobile from "../pages/Mobile/LoginMobile";

const Stack = createNativeStackNavigator()

export default function AppNavigatorMobile(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginMobile">
                <Stack.Screen 
                    name="LoginMobile"
                    component={LoginMobile}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='SidebarMobile'
                    component={DrawerNavigatorMobile}
                    options={{ headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}