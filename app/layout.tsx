import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Formulaire trandev",
  description: "Formulaire de contrôle qualité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="mx-auto h-dvh">
        {children}
      </body>
    </html>
  );
}
