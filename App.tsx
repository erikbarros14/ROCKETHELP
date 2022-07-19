 import { NativeBaseProvider } from 'native-base'

 import { useFonts , Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

 import   {Singnin} from './src/screens/Signin'

 import {THEME} from './src/styles/theme'
 import {Loading}   from'./src/conponemts/Loading'

 export default function App () {
   const [fontsLoadedi] =  useFonts(  {Roboto_700Bold, Roboto_400Regular})

  return (
    <NativeBaseProvider theme={THEME} >
   
      { fontsLoadedi?   <Singnin/> : <Loading /> }

      </NativeBaseProvider>
  )
 }