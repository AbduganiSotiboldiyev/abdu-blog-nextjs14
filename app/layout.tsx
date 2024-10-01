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
  metadataBase: new URL('https://test-blog.abdu.ac'),
  title: "Abdu-blog.Blog for my web projects ",
  description: "I gather my self or business projects  on this web",
  authors: [{ name: 'Abdug\'ani Sotiboldiyev', url: 'https://abdu-portfolio.ac' }],
  // icons: { icon: '/favicon.png' },
  keywords:
		"samar badriddinov, sammi, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, sammi, sammi academy, bepul dasturlash, rezyume yozish, portfolio, sammi javascript, sammi raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
  openGraph: {
		title: 'Abdu-blog.Blog for my web projects ',
		description:
			'I gather my self or business projects  on this web',
		type: 'website',
		url: 'https://test-blog.abdu.ac',
		locale: 'en_EN',
		images: 'https://media.graphassets.com/kXL006lyRnW46IKTHdHs',
		countryName: 'Uzbekistan',
		siteName: 'Abdu',
		emails: 'abdu.dev.1998@gmail.com',
	},

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