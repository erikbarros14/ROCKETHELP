import { VStack , Text, HStack, Box, useTheme, Circle, Pressable , IPressableProps} from 'native-base';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { CircleWavyCheck, ClockAfternoon, Hourglass } from 'phosphor-react-native';



 export  type OrdersProps = {
    id: string;
    patrimony : string;
    status : string;    
    when : string;
}
 type Props = IPressableProps & { 
    data: OrdersProps
 } 

export function Orders( {data, ...rest} : Props ) {
   const {colors} = useTheme()
const colorState =  data.status === 'open' ? colors.secondary [700] : colors.green [300]
  return (
   <Pressable {...rest}>
    <HStack   
     bg="gray.600"
     mb={4}
     justifyContent='space-between'
     alignItems="center"
     rounded="sm"
     overflow="hidden"
    >
        <Box
        h="full"
        w={2}
        bg={colorState}
        />
        <VStack   flex={1} my={6} ml={6} >
        <Text color="white" fontSize="md">
           Patrimonio {data.patrimony}
        </Text>
         <HStack alignItems="center" >
            <ClockAfternoon size={15} color={colors.gray [300]} />
            <Text color="gray.200" fontSize="xs" ml={1} >
               {data.when}
            </Text>
            </HStack>
           </VStack>
             <Circle bg="gray.500" h={12} w={12} ml={5} >
             {data . status === 'open' ? <CircleWavyCheck size={24} color={colorState}/> : <Hourglass size={24} color={colorState}/>}
             </Circle>
          </HStack>
         
         </Pressable>
  );
}