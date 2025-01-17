import { Input as NativeBaseInput } from 'native-base';

export function Input({...rest}) {
  return (
    <NativeBaseInput
     bg="gray.700"
     h={12}
     size="md"
     borderWidth={0}
     fontSize="md"
     fontFamily="body"
     color="white"
     placeholderTextColor="gray.300"

     _focus={
      {
        borderWidth : 1,
        borderColor : "green.500",
        color: 'gray.700'
      }
     }
    
     {...rest}
    />

    
  );
}