import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Este é um blog com Next.js",
  description: "Essa é a descrição do blog",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout( { children } : Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Meu blog</h1>
        </header>

        <div className="bg-red-500">{children}</div>
      
        <footer>
          <p>Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}
