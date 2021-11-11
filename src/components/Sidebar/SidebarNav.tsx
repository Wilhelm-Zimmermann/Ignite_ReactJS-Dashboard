import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboard2Line, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export const SidebarNav = () => {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboard2Line} href="/dashboard" children="Dashboard" />
                <NavLink icon={RiContactsLine} href="/users" children="Usuários" />
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} href="/forms" children="Formulários" />
                <NavLink icon={RiGitMergeLine} href="/automation" children="Automação" />
            </NavSection>
        </Stack>
    )
}