import { FormControl, FormLabel, Input, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string; 
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <Input 
            name={name} 
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
                bgColor: "gray.900"
            }}
            size="lg"
            id={name}
            {...rest}
            ref={ref}
            />
            { !!error && (
            <FormErrorMessage>
                {error.message}
            </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const FormInput = forwardRef(InputBase);