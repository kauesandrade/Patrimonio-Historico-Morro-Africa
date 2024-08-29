import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Rotas Africanas em Jaraguá do Sul",
  description: "Morro África",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='bg-slate-200'>
        <Header></Header>
        <main className="flex m-8 mx-auto w-[90%] justify-center items-center md:w-[70%]">
          {children}
        </main>
      </body>
    </html>
  );
}
