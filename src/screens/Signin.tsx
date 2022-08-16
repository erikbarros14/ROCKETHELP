
import { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'
import  {  VStack , Heading, Icon, useTheme } from  'native-base'
import Logo  from '../assets/logo_primary.svg'
import { Input } from '../components/Input'
import  { Envelope , Key }  from 'phosphor-react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Button } from '../components/Button'

export  function Singnin() {

const [isloading, setIsloading] = useState (false)
const [email , setEmail] = useState('')
const [senha , setSenha] = useState('')

 const {colors} = useTheme()
 function handleSignin () {
 if(!email || !senha) {
  return Alert.alert( "opss !!" , "informe seu emal e senha !!" )
 }

 setIsloading(true)
   
    auth() . signInWithEmailAndPassword(email , senha)
    .catch((error) => {
      console.log(error)
      setIsloading(false)
    })
    
   
 }

return (
   <VStack flex= {1} alignItems= 'center' bg="gray.600" px={8} pt={24} >
    <Logo/>


    <Heading   color="gray.100" fontSize="xl" mt={20} mb={6} >
    Acesse sua conta
    </Heading>
      <Input
        mb={4}
       placeholder="E-mail" 
         InputLeftElement={ <Icon as = { <Envelope color={colors.gray [300] }   /> } ml={3} /> }
          onChangeText= {setEmail}
           />
      <Input 
      mb={8 }
      placeholder="Senha" 
        InputLeftElement={ <Icon as = { <Key color={colors.gray [300] }   /> } ml={3} /> }
        secureTextEntry
        onChangeText = {setSenha}
      />

      <Button 
      title="Entrar" w='full' 
       onPress={handleSignin}
       isLoading={isloading}
       />

   </VStack>
)


}