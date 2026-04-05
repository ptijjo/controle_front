import type { Metadata, Viewport } from "next";
import "./globals.css";
import PwaProvider from "./components/PwaProvider";

const APP_NAME = "Formulaire Trandev";
const APP_DESCRIPTION = "Formulaire de contrôle qualité";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: `%s · ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#ac504f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="mx-auto h-dvh">
        <PwaProvider>{children}</PwaProvider>
      </body>
    </html>
  );
}
