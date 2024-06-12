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
                {children}
            </body>
        </html>
    );
}