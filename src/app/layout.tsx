import ProviderWrapper from "@/shared/providers/provider-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Task Management",
    description: "Task Management By Reccio and Rodas",
};

export default function RootLayout({
    children
}: {
    children: React.ReactElement;
}) {
    return (
        <html lang="en">
            <body>
                <ProviderWrapper>
                    {children}
                </ProviderWrapper>
            </body>
        </html>
    );
}