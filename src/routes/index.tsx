import {NavigationContainer} from '@react-navigation/native' 


import {Singnin}from '../screens/Signin'
import { AppRoutes } from './app.routes'

export function Router () {
    return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}