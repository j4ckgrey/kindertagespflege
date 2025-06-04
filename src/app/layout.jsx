import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Image from "next/image";
import Logo from "@/assets/Image.png";
import "./globals.css";

export const metadata = {
  title: "Die Weltentdecker",
  description: "Entdecke spielerisch die Welt mit uns!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <title>Die Weltentdecker</title>
        <meta
          name="description"
          content="Entdecke spielerisch die Welt mit uns!"
        />
        <meta name="theme-color" content="#e11d48" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <div className="relative flex flex-col min-h-screen">
          <div className="bg-hands"></div>
          <Header />
          <main className="page-container flex-grow">
            <div className="relative w-96 h-auto mx-auto mb-6">
              <Image
                src={Logo}
                alt="logo"
                className="object-contain"
                width="auto"
                height="auto"
              />
            </div>
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
