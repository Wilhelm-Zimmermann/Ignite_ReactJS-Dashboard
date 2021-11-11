import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    childMatchExactHref?: boolean;
}

export const ActiveLink = ({ 
    children, 
    childMatchExactHref = false, 
    ...rest 
    }: ActiveLinkProps) => {
    let isActive = false;
    const { asPath } = useRouter();

    if(childMatchExactHref && asPath === rest.href || asPath === rest.as) {
        isActive = true;
    }

    if(!childMatchExactHref && (asPath.startsWith(String(rest.href))) 
    || asPath.startsWith(String(rest.as))) {
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? "pink.400" : "gray.50"
            })}
        </Link>
    )
}