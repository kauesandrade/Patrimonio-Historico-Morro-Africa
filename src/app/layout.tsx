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
      <head>
        <link rel="icon" href="/assets/montanhaIcon.png" />
      </head>
      <body className='bg-slate-200'>
        <Header></Header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
