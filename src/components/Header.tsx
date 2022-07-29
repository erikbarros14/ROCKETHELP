import { HStack  , Heading, IconButton, useTheme, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

type Props = StyledProps &  {
    title: string
}

export function Header( {title, ...rest} : Props ) {
    const {colors} = useTheme ()
    const navigation = useNavigation()

     function handleGoback () {
      navigation.goBack()
     }

  return (
    <HStack  
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pt={12}
      pb={6}
      {...rest}
     >
      
      <IconButton
        icon={<CaretLeft  color={colors.gray[300] }  size={24} />}
        onPress={handleGoback}
      />
      <Heading flex={1} color="gray.100" textAlign="center" fontSize="lg" pl={-6} >
        {title}
      </Heading>

     

    </HStack>
  );
}