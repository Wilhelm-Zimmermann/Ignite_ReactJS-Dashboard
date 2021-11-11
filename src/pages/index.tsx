import { Flex, Input, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { FormInput } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
}

const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email(),
  password: yup.string().required("Senha é obrigatório")
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {

    console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW="360px"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <FormInput 
            name="email" 
            type="email" 
            label="Email" 
            error={errors.email}
            {...register("email")}
          />

          <FormInput 
            name="password" 
            type="password" 
            label="Password"
            error={errors.password}
            {...register("password")}
          />

        </Stack>
        <Button 
          type="submit" 
          mt="6" 
          bg="pink.600" 
          _hover={{bgColor: "pink.700"}}
          color="white"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
