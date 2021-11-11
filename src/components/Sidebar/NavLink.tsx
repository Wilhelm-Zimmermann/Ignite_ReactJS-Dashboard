import { Link as ChakraLink, Icon, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center"{...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium"> {children} </Text>
            </ChakraLink>
        </ActiveLink>
    )
}