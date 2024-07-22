// 使用 'use client' 指令，表示這是一個 Client Component
'use client'

// 從 "next/font/google" 導入 Inter 字型
import {Inter} from "next/font/google";
// 導入全域 CSS 樣式表
import "../globals.css";
// 從 "@please/lrud" 導入 FocusRoot 元件
import {FocusRoot} from "@please/lrud";

// 定義 inter 變數，設定 Inter 字型的子集為 "latin"
const inter = Inter({subsets: ["latin"]});

// 定義 RootLayout 元件，接收 children 作為 props
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    // 在 FocusRoot 元件中渲染 children
    return (
        <FocusRoot>
            {children}
        </FocusRoot>
    );
}
