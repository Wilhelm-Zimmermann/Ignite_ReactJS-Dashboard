import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button, Icon, Table, Thead, Tbody, Tr, Td, Th, Checkbox, Text } from "@chakra-ui/react";
import { FormInput } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import Link from "next/link";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([
        null,
        yup.ref("password")
    ], "As senhas precisam ser iguais")
});

interface CreateUserData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function CreateUser() {
    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserSchema)
    });

    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserData> = async (values) => {
        console.log(values)
      }

    return (
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                <Box 
                    as="form" 
                    onSubmit={handleSubmit(handleCreateUser)} 
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p={["6","8"]}
                >
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
                    <Divider my="6" borderColor="gray.700"/>

                    <VStack
                        spacing={["6","8"]}
                    >
                        <SimpleGrid 
                            minChildWidth={240}
                            spacing={["6","8"]}
                            w="100%"
                        >
                            <FormInput 
                                name="name" 
                                type="name" 
                                label="Nome Completo"
                                {...register("name")}
                                error={errors.name}
                            />

                            <FormInput 
                                name="email" 
                                type="email" 
                                label="E-Mail"
                                {...register("email")}
                                error={errors.email}
                            />
                        </SimpleGrid>
                        <SimpleGrid 
                            minChildWidth={240}
                            spacing={["6","8"]}
                            w="100%"
                        >
                            <FormInput 
                                name="password" 
                                type="password" 
                                label="Senha"
                                {...register("password")}
                                error={errors.password}
                            />

                            <FormInput 
                                name="confirmPassword" 
                                type="password" 
                                label="Confirmar Senha"
                                {...register("confirmPassword")}
                                error={errors.confirmPassword}
                            />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="gray">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}