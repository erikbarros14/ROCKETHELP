import {  HStack, IconButton, VStack , useTheme, Heading, Text} from 'native-base';
import Logo from '../assets/logo_secondary.svg'
import { SignOut } from 'phosphor-react-native'
import { Filter } from '../conponemts/Filter'; 

import React, { useState } from 'react';

export function Home() {
  
    const [  statusSelecter, setStatusSelecter] = useState <'open' | 'closed' > ('open')
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
       </VStack>
         
    </VStack>
  );
}