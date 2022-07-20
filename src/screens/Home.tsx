import {  HStack, IconButton, VStack , useTheme, Heading, Text, FlatList, Center} from 'native-base';
import Logo from '../assets/logo_secondary.svg'
import { SignOut } from 'phosphor-react-native'
import { Filter } from '../conponemts/Filter'; 
import { Orders , OrdersProps } from '../conponemts/Orders';
 import { Button } from '../conponemts/Button';
 import { ChatTeardropText } from 'phosphor-react-native'

import React, { useState } from 'react';

export function Home() {
  
    const [  statusSelecter, setStatusSelecter] = useState <'open' | 'closed' > ('open')
    const [orders, setOrders] =useState <OrdersProps []> ([ ])
    const {colors} = useTheme()
     
     return (
      <VStack flex={1} pb={6} bg="gray.700" >
        <HStack
       w="full"
       justifyContent="space-between"
       alignItems="center"
       bg="gray.600"
       pt={12}
       pb={5}
       px={6}
       >
        <Logo/>
          
        <IconButton
         icon={ <SignOut size={26} color={colors.gray [300]} />}
        />
          </HStack>
        <VStack flex={1} px={6}  >
         <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center " >
            <Heading color="gray.100">
               Meus  chamados 
            </Heading>
         <Text color="gray.200" >
           5
         </Text>
          </HStack>

       <HStack space={3} mb={8}>
          <Filter 
           type="open"
           title="em andamento"
           onPress={() => setStatusSelecter('open')}
           isActive={statusSelecter  ===  'open'}
            
          />
          <Filter 
           type="closed"
           title="finalisado"
           onPress={() => setStatusSelecter('closed')}
           isActive={statusSelecter  ===  'closed'}
          />

       </HStack>  
         <FlatList
         data={orders}
         keyExtractor= { item => item.id}
         renderItem= {({item}) => <Orders data={item} />}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{paddingBottom:60}}
         ListEmptyComponent ={( ) => (
          <Center>
            <ChatTeardropText  color={colors.gray [300]}  />
           <Text color="gray.300" fontSize="xl" mt={6} alignItems="center" >
             você ainda não possui {'\n'}
             solicitações {statusSelecter === 'open' ? 'em aberto  ' : 'finalizada'}
           </Text>

          </Center>
         )}
         />
          <Button title='Nova solicitação' />
       </VStack>
         
    </VStack>
  );
}