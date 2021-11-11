import { Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Td, Th, Checkbox, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";
import Link from "next/link";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create" passHref>
                        
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                bg="pink.500"
                                color="white"
                                cursor="pointer"
                                _hover={{backgroundColor: "pink.400"}}
                                leftIcon={<Icon as={RiAddLine}/>}
                            >
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table
                        colorScheme="whiteAlfa"
                    >
                        <Thead>
                            <Tr>
                                <Th px={["4","4","6"]} color="gray.300" w="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de Cadastro</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4","6"]}>
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Wilhelm Henrique Zimmermann</Text>
                                        <Text fontSize="sm" color="gray.300">wilhelmzimmermann8@gmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion &&  <Td>04 de maio de 2022</Td>}
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}