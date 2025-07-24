import type { Metadata } from "next";
import { Amarante, Amatic_SC } from "next/font/google";
import "./globals.css";

const Amatic = Amatic_SC({ subsets: ["latin"],weight:["400","700"] });
const amarante=Amarante({
  subsets:["latin"],
  variable:"--text-font",
  weight:["400"],
})

export const metadata: Metadata = {
  title: "Matheus Senas - Portfólio",
  description: "Portfólio do Desenvolvedor Full-Stack Matheus Senas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Amatic.className} bg-zinc-900  px-5 2xl:px-32 ${amarante.variable} `}>{children}</body>
    </html>
  );
}
