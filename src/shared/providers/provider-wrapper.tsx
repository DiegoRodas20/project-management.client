'use client';

import { SessionProvider } from "next-auth/react";
import { ReactElement } from "react";
import { ConfigProvider } from "shared/contexts/config-context";
import ThemeCustomization from "shared/themes";

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
    return (
        <ConfigProvider>
            <ThemeCustomization>
                <SessionProvider refetchInterval={0}>
                    {children}
                </SessionProvider>
            </ThemeCustomization>
        </ConfigProvider>
    );
};

export default ProviderWrapper;