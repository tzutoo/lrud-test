'use client'

import {Inter} from "next/font/google";
import "../globals.css";
import {FocusRoot} from "@please/lrud";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <FocusRoot>
            {children}
        </FocusRoot>
    );
}
