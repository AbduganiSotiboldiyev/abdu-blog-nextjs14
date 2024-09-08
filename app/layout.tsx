import type { Metadata } from "next";
import {Crete_Round,Work_Sans } from "next/font/google";
import "./globals.css";
import ChildProps from "@/types";
import { ThemeProvider } from "@/components/providers/theme-provider";



const creteRound = Crete_Round({
  weight : ["400"],
  subsets: ["latin"],
  variable :"--font-creteRound"
})
const workSans = Work_Sans({
  weight:["500", "600"],
  subsets:["latin"],
  variable :"--font-workSans"
})

export const metadata: Metadata = {
  title: "Abdu-blog.Blog for my web projects ",
  description: "I gather my self or business projects  on this web",
};

function RootLayout({children}:ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${creteRound.variable}  ${workSans.variable} overflow-x-hidden`}>
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
          {children}

        </ThemeProvider>
        </body>
    </html>
  );
}

export default  RootLayout