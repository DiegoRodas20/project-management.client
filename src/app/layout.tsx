import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Task Management",
    description: "Task Management By Reccio and Rodas",
};

type Props = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}