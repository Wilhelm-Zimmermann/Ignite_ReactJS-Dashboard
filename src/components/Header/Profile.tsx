import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
    return (
        <Flex
        align="center"

    >
        { showProfileData && (
            <Box mr="4" textAlign="right">
            <Text> Wilhelm Zimmermann </Text>
            <Text color="gray.300" fontSize="small"> wilhelmzimmermann8@gmail.com </Text>
        </Box>
        )}
        <Avatar size="md" name="Wilhelm Zimmermann" src="https://avatars.githubusercontent.com/u/79175606?v=4"/>
    </Flex>
    )
}