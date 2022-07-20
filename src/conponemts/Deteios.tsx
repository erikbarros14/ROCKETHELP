import { VStack,  } from 'native-base';
import { Header } from './Header';

export function Deteios() {
  return (
    <VStack  flex={1} bg="gray.700">
     <Header title='solicitação' />
    </VStack>
  );
}