import { VStack, Text } from 'native-base';
import { Header } from '../components/Header';
import { useRoute } from '@react-navigation/native';
type RouteParam = {
  orderId : string ;
}
export function Deteios() {
   const  route = useRoute()
   const {orderId} = route.params as RouteParam

  return (
    <VStack  flex={1} bg="gray.700">
     <Header title='solicitação' />
     <Text  color='white'>
      {orderId}
     </Text>
    </VStack>
  );
}