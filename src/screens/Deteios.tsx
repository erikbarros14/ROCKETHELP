import { VStack,  } from 'native-base';
import { Header } from '../conponemts/Header';
import { useRoute } from '@react-navigation/native'
  type  RoutesParams = {
    orderId : string
  }

export function Deteios() {
   const  route = useRoute()
   const {} = route.params as RoutesParams

  return (
    <VStack  flex={1} bg="gray.700">
     <Header title='solicitação' />
    </VStack>
  );
}