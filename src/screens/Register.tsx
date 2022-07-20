import { VStack } from 'native-base';
import { Header } from '../conponemts/Header'
import { Input } from '../conponemts/Input'
import { Button } from '../conponemts/Button'


export function Register() {
  return (
    <VStack flex={1} p={6}bg="gray.600" >
      <Header
      title='Nova solicitação'
          />
          <Input
            placeholder="Nome do patrimonio"
            mt={4}
           />     
      
         <Input
        placeholder="Descrição do problema"
        mt={5}
        flex={1}
        multiline
          textAlignVertical="top"
        />
        <Button
        title='Cadrastar'
        mt={5}
        />



    </VStack>
  );
}