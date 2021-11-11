import { Text } from "@chakra-ui/react";

export const Logo = () => {
    return (
        <Text
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                dashgo
        <Text as="span" ml="4px" color="pink.500">.</Text>
        </Text>
    )
}