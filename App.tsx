 import { NativeBaseProvider } from 'native-base'

 import { useFonts , Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

 import   {Home} from './src/screens/Home'

 import {THEME} from './src/styles/theme'
 import {Loading}   from'./src/conponemts/Loading'

 export default function App () {
   const [fontsLoadedi] =  useFonts(  {Roboto_700Bold, Roboto_400Regular})

  return (
    <NativeBaseProvider theme={THEME} >
   
      { fontsLoadedi?   <Home/> : <Loading /> }

      </NativeBaseProvider>
  )
 }