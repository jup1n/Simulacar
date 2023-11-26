import {createNativeStackNavigator, } from '@react-navigation/native-stack'
import InputAge from '@screens/Age'
import Budget from '@screens/Budget'
import CarInfo from '@screens/CarInfo'
import Login from '@screens/Login'


export function AppRoutes(){
    const {Navigator, Screen} = createNativeStackNavigator()

    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="login" component={Login}/>
            {<Screen name="inputAge" component={InputAge}/>}
            {<Screen name="carInfo" component={CarInfo}/>}
            {<Screen name="budget" component={Budget}/>}

        </Navigator>
    )

}