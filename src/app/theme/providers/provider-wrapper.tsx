'use client';

import Customization from "@/shared/components/customization";
import { ReactElement } from "react";
import ThemeCustomization from "../theme-customization";

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
    return (
        <ThemeCustomization>
            {children}
            <Customization />
        </ThemeCustomization>
    )
}

export default ProviderWrapper;