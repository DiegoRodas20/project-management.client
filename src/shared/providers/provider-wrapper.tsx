'use client';

import { ReactElement } from "react";
import ThemeCustomization from "../theme/theme-customization";

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
    return (
        <ThemeCustomization>
            {children}
        </ThemeCustomization>
    )
}

export default ProviderWrapper;