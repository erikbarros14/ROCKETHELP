import { HStack  , Heading, IconButton, useTheme, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native'

type Props = StyledProps &  {
    title: string
}

export function Header( {title, ...rest} : Props ) {
    const {colors} = useTheme ()
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
      />
      <Heading flex={1} color="gray.100" textAlign="center" fontSize="lg" pl={-6} >
        {title}
      </Heading>

     

    </HStack>
  );
}