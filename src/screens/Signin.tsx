
import { useState } from 'react'
import  {  VStack , Heading, Icon, useTheme } from  'native-base'
import Logo  from '../assets/logo_primary.svg'
import { Input } from '../conponemts/Input'
import  { Envelope , Key }  from 'phosphor-react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Button } from '../conponemts/Button'

export  function Singnin() {

const [name , setName] = useState('')
const [senha , setSenha] = useState('')

 const {colors} = useTheme()
 function handleSignin () {
  console.log(name , senha)
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
          onChangeText= {setName}
           />
      <Input 
      mb={8 }
      placeholder="Senha" 
        InputLeftElement={ <Icon as = { <Key color={colors.gray [300] }   /> } ml={3} /> }
        secureTextEntry
        onChangeText = {setSenha}
      />

      <Button title="Entrar" w='full'  onPress={handleSignin} />

   </VStack>
)


}